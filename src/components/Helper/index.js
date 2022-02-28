require("dotenv/config");
const axios = require("axios");
const moment = require("moment");

const toFixed = (_amount) => Number(_amount).toFixed(2);

const formatNumber = (_amount) =>
	new Intl.NumberFormat("en", { maximumSignificantDigits: 3 }).format(
		Number(_amount)
	);

const shortener = (_data) => {
	if (_data === undefined) return;
	const _splited = _data.split("");
	const _length = _splited.length;

	const firstPart = `${_splited[0]}${_splited[1]}${_splited[2]}${_splited[3]}${_splited[4]}${_splited[5]}${_splited[6]}`;
	const secondPart = `${_splited[_length - 7]}${_splited[_length - 6]}${
		_splited[_length - 5]
	}${_splited[_length - 4]}${_splited[_length - 3]}${_splited[_length - 2]}${
		_splited[_length - 1]
	}`;
	return `${firstPart}...${secondPart}`;
};

const getPath = (_networkType) => {
	const path =
		_networkType === "Mainnet"
			? `https://etherscan.io`
			: `https://${_networkType}.etherscan.io`;
	return path;
};

const getEthPrice = async () => {
	try {
		let result = await (
			await fetch(
				`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD`
			)
		).json();
		return result.ethereum.usd;
	} catch (error) {
		console.log(error);
	}
};

//  _doc = new jsPDF
const doughnutChartConfig = (data, _type, numberPrefix, showPercentValues) => {
	const _chart = {
		type: _type ? _type : "doughnut2d",
		width: "700",
		height: "500",
		dataFormat: "json",
		dataSource: {
			chart: {
				numberPrefix: numberPrefix ? numberPrefix : "",
				decimals: "2",
				theme: "fusion",
				showPercentValues: showPercentValues ? showPercentValues : false,
			},
			data,
		},
	};
	return _chart;
};

const cashbackCalculator = (_amount = 500, _cashbackPercentage = 2) => {
	const _result = (_amount * _cashbackPercentage) / 100;
	return [
		{
			label: "daily cashback",
			value: _result.toString(),
		},
		{
			label: "weekly cashback",
			value: (_result * 7).toString(),
		},
		{
			label: "monthly cashback",
			value: (_result * 31).toString(),
		},
	];
};

const fixedDataArray = async (_data) => {
	if (_data.length <= 10) return _data;
	let _result = [];
	for (let i = 0; i < 10; i++) _result = [..._result, _data[i]];
	return _result;
};

const getRefferalHistory = async (web3, user, amusedToken) => {
	try {
		const _tempData = [
			...(await amusedToken.getPastEvents("ReferralReward", {
				filter: {
					referrer: web3.utils.toChecksumAddress(user),
				},
				fromBlock: 0,
				toBlock: "latest",
			})),
		];

		const _filteredData = _tempData.map((item) => {
			const { blockNumber, returnValues, transactionHash: hash } = item;
			const { user, referrer, purchased, reward, timestamp } = returnValues;
			return {
				user,
				referrer,
				blockNumber,
				purchased: web3.utils.fromWei(purchased),
				reward: web3.utils.fromWei(reward),
				hash,
				timestamp: moment(new Date(parseInt(timestamp * 1000))).fromNow(),
			};
		});
		return _filteredData.reverse();
	} catch (error) {
		console.log(error);
		return error.message;
	}
};

const getUstakedHistory = async (web3, user, amusedVault) => {
	try {
		const _tempData = [
			...(await amusedVault.getPastEvents("UNSTAKE", {
				filter: {
					user: web3.utils.toChecksumAddress(user),
				},
				fromBlock: 0,
				toBlock: "latest",
			})),
		];

		const _filteredData = _tempData.map((item) => {
			const { blockNumber, returnValues, transactionHash: hash } = item;
			const { user, amount, tokenValue, ethValue, timestamp } = returnValues;
			return {
				user,
				blockNumber,
				amount: web3.utils.fromWei(amount),
				tokenValue: web3.utils.fromWei(tokenValue),
				ethValue: web3.utils.fromWei(ethValue),
				hash,
				timestamp: moment(new Date(parseInt(timestamp * 1000))).fromNow(),
			};
		});
		return _filteredData.reverse();
	} catch (error) {
		console.log(error);
		return error.message;
	}
};

const postData = async (data, url) => {
	try {
		const _response = await axios({
			method: "post",
			url,
			data,
		});
		return _response;
	} catch (error) {
		return error;
	}
};

export {
	toFixed,
	formatNumber,
	shortener,
	getPath,
	getEthPrice,
	doughnutChartConfig,
	fixedDataArray,
	getRefferalHistory,
	getUstakedHistory,
	cashbackCalculator,
	postData,
};
