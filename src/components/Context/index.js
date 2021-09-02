import { createContext, Component } from "react";
import Web3 from "web3";
import axios from "axios";
import { AES, enc } from "crypto-js";
import {
	abi as amusedTokenABI,
	address as amuseTokenAddress,
} from "../../contracts/AmuseTokenABI.json";
import {
	abi as amusedVaultABI,
	address as amuseVaultAddress,
} from "../../contracts/AmuseVaultABI.json";
import {
	abi as amusedFaucetABI,
	address as amuseFaucetAddress,
} from "../../contracts/AmuseFaucet.json";
import {
	fixedDataArray,
	getEthPrice,
	getRefferalHistory,
	getUstakedHistory,
	postData,
} from "../Helper";
require("dotenv/config");

const web3Context = createContext();

class Web3Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			modalState: true,
			web3: null,
			user: process.env.REACT_APP_defaultAccount,
			ethereum: null,
			networkType: "NONE",
			INIT_REFERRAL_HASH: "",
			amuseTokenAddress: "",
			amuseVaultAddress: "",
			amuseFaucetAddress: "",
			USDT: "",
			WETH: "",
			amuseToken: null,
			amuseVault: null,
			amuseFaucet: null,
			balance: 0,
			cashbackPercentage: 0,
			stakes: {
				user: "",
				stakes: 0,
				ethValueEarned: 0,
				tokenValueEarned: 0,
				timestamp: 0,
			},
			dailyCashback: 0,
			amdPrice: 0,
			etherPrice: 0,
			transactionHistory: [],
			referralHistory: [],
			unstakeHistory: [],
		};
	}

	async componentDidMount() {
		await this.connectDapp();
	}

	connectDapp = async () => {
		try {
			await this.loadWeb3();
			await this.loadBlockchainData();
		} catch (error) {
			return error;
		}
	};

	loadWeb3 = async () => {
		try {
			const ethereum = window.ethereum;
			if (ethereum === undefined)
				throw new Error(
					"Non-Ethereum browser detected. Please install metamask and relaod the page"
				);

			const USDT = process.env.REACT_APP_USDT;
			const WETH = process.env.REACT_APP_WETH;

			const web3 = new Web3(ethereum);

			const _accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			const _chainId = await web3.eth.getChainId();
			const _networkType = await web3.eth.net.getNetworkType();

			if (parseInt(_chainId) !== 4) {
				this.setState({ loading: true });
				alert(
					`Amuse: Invalid network detected. Please switch from ${_networkType} to Mainnet / Rinkeby`
				);
				return;
			}

			const user = web3.utils.toChecksumAddress(_accounts[0]);
			const INIT_REFERRAL_HASH = process.env.REACT_APP_REFERRAL_HASH;

			const amuseToken = new web3.eth.Contract(
				amusedTokenABI,
				amuseTokenAddress
			);
			const amuseVault = new web3.eth.Contract(
				amusedVaultABI,
				amuseVaultAddress
			);
			const amuseFaucet = new web3.eth.Contract(
				amusedFaucetABI,
				amuseFaucetAddress
			);

			this.setState({
				loading: false,
				modalState: false,
				web3,
				user,
				ethereum,
				networkType: _networkType === "main" ? "Mainnet" : _networkType,
				INIT_REFERRAL_HASH,
				amuseTokenAddress,
				amuseVaultAddress,
				USDT,
				WETH,
				amuseToken,
				amuseVault,
				amuseFaucet,
			});
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	// load blockchain data
	loadBlockchainData = async (
		{ loading, web3, user, networkType } = this.state
	) => {
		if (loading || !web3) return;
		try {
			const amdPrice = 0.25;
			const etherPrice = await getEthPrice();
			const _cashbackPercentage = await this.cashbackPercentage();

			const balance = await this.balanceOf();
			const stakes = await this.stakes(amdPrice, etherPrice);
			const dailyCashback = await this.getDailyCashback();
			const _transactionHistory = await fixedDataArray(
				(
					await axios.get(
						`https://amuse-finance-backend.herokuapp.com/api/v1/transactions?network=${
							networkType === "Mainnet" ? null : networkType
						}&user=${user}`
					)
				).data
			);
			const _refferalHistory = await fixedDataArray(
				await this.getRefferalHistory()
			);
			const _unstakeHistory = await this.getUnstakedHistory();

			this.setState({
				amdPrice,
				etherPrice,
				balance,
				dailyCashback,
				cashbackPercentage: _cashbackPercentage,
				stakes,
				transactionHistory: _transactionHistory,
				referralHistory: _refferalHistory,
				unstakeHistory: _unstakeHistory,
			});
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	reRender = async () => await this.loadBlockchainData();

	updateAccount = async (_newAddress) => {
		try {
			this.setState({ user: this.toChecksumAddress(_newAddress) });
			await this.reRender();
		} catch (error) {
			return error;
		}
	};

	closeModal = () => this.setState({ modalState: false });

	fromWei = (_amount, { web3 } = this.state) =>
		web3.utils.fromWei(_amount, "ether");

	toWei = (_amount, { web3 } = this.state) =>
		web3.utils.toWei(_amount, "ether");

	toChecksumAddress = (_account, { web3 } = this.state) =>
		web3.utils.toChecksumAddress(_account);

	balanceOf = async (_account, { loading, user, amuseToken } = this.state) => {
		try {
			if (loading) return;
			const _balance = await amuseToken.methods
				.balanceOf(_account ? _account : user)
				.call();
			return this.fromWei(_balance);
		} catch (error) {
			return error.message;
		}
	};

	cashbackPercentage = async ({ loading, amuseToken } = this.state) =>
		!loading && (await amuseToken.methods.cashbackPercentage().call());

	stakes = async (
		amdPrice,
		etherPrice,
		{ loading, user, amuseVault } = this.state
	) => {
		try {
			if (loading) return;
			const { stakes: _stakes, timestamp } = await amuseVault.methods
				.stakes(user)
				.call();
			const stakes = this.fromWei(_stakes);
			const stakesRewads = await this.getStakeRewards(
				amdPrice,
				etherPrice,
				_stakes
			);
			return { user, stakes, timestamp, ...stakesRewads };
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	allowance = async (
		{ loading, user, amuseTokenAddress, amuseToken } = this.state
	) => {
		try {
			if (loading) return;
			const _allowance = await amuseToken.methods
				.allowance(user, amuseTokenAddress)
				.call();
			return this.fromWei(_allowance);
		} catch (error) {
			return error;
		}
	};

	parseErrorMessage = (_error) => {
		try {
			const _unparsed =
				"while converting number to string, invalid number value '', should be a number matching (^-?[0-9.]+).";
			const _errArr = _error.message.split(":");
			const _errorMessage = _errArr[_errArr.length - 1].split(`"`)[0];
			if (_errorMessage === _unparsed) return `Unable to parse arguments`;
			return _errorMessage;
		} catch (error) {
			return error;
		}
	};

	getDailyCashback = async ({ user, amuseToken } = this.state) => {
		try {
			const _dailyCashback = await amuseToken.methods
				.calculateDailyCashback(user)
				.call();
			return this.fromWei(_dailyCashback);
		} catch (error) {
			return error;
		}
	};

	getStakeRewards = async (
		amdPrice,
		etherPrice,
		_stakes,
		{ loading, user, amuseVault } = this.state
	) => {
		if (loading || parseFloat(_stakes) <= 0) {
			return {
				tokenValueEarned: 0,
				ethValueEarned: 0,
			};
		}
		try {
			const _tokenValueEarned = this.fromWei(
				await amuseVault.methods.calculateStakeRewards(user, _stakes).call()
			);
			const _ethValueEarned =
				(parseFloat(_tokenValueEarned) * amdPrice) / etherPrice;

			return {
				tokenValueEarned: _tokenValueEarned,
				ethValueEarned: _ethValueEarned,
			};
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	approve = async (
		_amount,
		{ loading, web3, user, amuseVaultAddress, amuseToken } = this.state
	) => {
		try {
			if (loading || _amount < 0) return;
			// const gasPrice = await web3.eth.getGasPrice();
			const _formattedStakeAmount = this.toWei(_amount);
			const _response = await amuseToken.methods
				.approve(amuseVaultAddress, _formattedStakeAmount)
				.send({
					from: user,
					// gasPrice,
				});
			await this.reRender();
			return { ..._response };
		} catch (error) {
			return { status: false, data: this.parseErrorMessage(error) };
		}
	};

	stake = async (_amount, { loading, web3, user, amuseVault } = this.state) => {
		try {
			if (loading || _amount < 0) return;
			// const gasPrice = await web3.eth.getGasPrice();
			const _formattedStakeAmount = this.toWei(_amount);
			await amuseVault.methods
				.stake(_formattedStakeAmount)
				.call({ from: user });
			const _response = await amuseVault.methods
				.stake(_formattedStakeAmount)
				.send({
					from: user,
					// gasPrice,
				});
			await this.reRender();
			return { ..._response };
		} catch (error) {
			return {
				status: false,
				data: this.parseErrorMessage(error),
			};
		}
	};

	unstake = async (_amount, { loading, user, amuseVault } = this.state) => {
		try {
			if (loading) return;
			await amuseVault.methods
				.unstake(this.toWei(_amount))
				.call({ from: user });
			const _response = await amuseVault.methods
				.unstake(this.toWei(_amount))
				.send({
					from: user,
				});
			await this.reRender();
			return { ..._response };
		} catch (error) {
			return {
				status: false,
				data: this.parseErrorMessage(error),
			};
		}
	};

	registerReferrer = async (
		_account,
		{ loading, web3, user, amuseToken } = this.state
	) => {
		if (loading) return;
		try {
			const _referrer = this.toChecksumAddress(_account);
			await amuseToken.methods.addReferrer(_referrer).call({ from: user });
			const _response = await amuseToken.methods.addReferrer(_referrer).send({
				from: user,
			});
			return { ..._response };
		} catch (error) {
			const _errResponse = !this.parseErrorMessage(error).includes(
				"Cannot read property 'words' of undefined"
			)
				? this.parseErrorMessage(error)
				: "Invalid Referrer ID";

			await this.reRender();

			return {
				status: false,
				data: _errResponse,
			};
		}
	};

	getRefferalHistory = async (
		{ loading, web3, user, amuseToken } = this.state
	) => {
		try {
			if (loading) return;
			const _result = await getRefferalHistory(web3, user, amuseToken);
			return _result;
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	getUnstakedHistory = async (
		{ loading, web3, user, amuseVault } = this.state
	) => {
		try {
			if (loading) return;
			const _result = await getUstakedHistory(web3, user, amuseVault);
			return _result;
		} catch (error) {
			return error;
		}
	};

	requestFaucet = async (amount, { loading, ethereum, user } = this.state) => {
		if (loading) return;
		try {
			const chainId = parseInt(
				await ethereum.request({ method: "eth_chainId" }),
				16
			);
			const title = "Test network faucet request";
			const msgParams = JSON.stringify({
				domain: {
					chainId,
					name: "Amuse.Finance",
					version: "1",
				},
				message: { title, user, amount },
				primaryType: "FaucetRequest",
				types: {
					EIP712Domain: [
						{ name: "name", type: "string" },
						{ name: "version", type: "string" },
						{ name: "chainId", type: "uint256" },
					],
					FaucetRequest: [
						{ name: "title", type: "string" },
						{ name: "user", type: "address" },
						{ name: "amount", type: "uint256" },
					],
				},
			});

			const signature = await ethereum.request({
				method: "eth_signTypedData_v4",
				params: [user, msgParams],
				from: user,
			});

			const _data = { user, signature, chainId, amount };

			const _url =
				"https://amuse-finance-backend.herokuapp.com/api/v1/faucets/requestFaucet";
			const _result = await postData(_data, _url);
			if (!_result.data.receipt.status) {
				return { error: "Please wait for 24hours to request another faucet" };
			}
			await this.reRender();
			return _result;
		} catch (error) {
			return { error };
		}
	};

	generateReferralLink = async (
		{ loading, user, INIT_REFERRAL_HASH } = this.state
	) => {
		if (loading) return;
		try {
			const referralID = AES.encrypt(user, INIT_REFERRAL_HASH).toString();
			const _result = referralID.replaceAll("=", "");
			return _result;
		} catch (error) {
			return error;
		}
	};

	decryptReferrerHash = (_data, { INIT_REFERRAL_HASH } = this.state) => {
		try {
			const _result = AES.decrypt(_data, INIT_REFERRAL_HASH);
			const _referrer = _result.toString(enc.Utf8);
			return _referrer;
		} catch (error) {
			return error;
		}
	};

	render() {
		return (
			<web3Context.Provider
				value={{
					...this.state,
					closeModal: this.closeModal,
					fromWei: this.fromWei,
					toWei: this.toWei,
					connectDapp: this.connectDapp,
					reRender: this.reRender,
					updateAccount: this.updateAccount,
					allowance: this.allowance,
					approve: this.approve,
					stake: this.stake,
					unstake: this.unstake,
					registerReferrer: this.registerReferrer,
					requestFaucet: this.requestFaucet,
					generateReferralLink: this.generateReferralLink,
					decryptReferrerHash: this.decryptReferrerHash,
				}}
			>
				{this.props.children}
			</web3Context.Provider>
		);
	}
}

export { web3Context, Web3Provider };
