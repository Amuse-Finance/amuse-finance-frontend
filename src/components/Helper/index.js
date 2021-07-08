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

const getRefferalHistory = async (web3, amusedToken, user) => {
	try {
		const startBlock = await (
			await axios.get(
				"https://amused-finance-backend.herokuapp.com/api/v1/startBlock"
			)
		).data;
		const _endBlock = parseInt(await web3.eth.getBlockNumber());
		let _tempData = [];

		for (let i = startBlock; i <= _endBlock; i = i + 10000) {
			const _step = i + 10000;
			const _result = await amusedToken.getPastEvents("ReferralReward", {
				fromBlock: i,
				toBlock: _step,
			});
			_tempData = [..._tempData, ..._result];
		}
		_tempData = _tempData.filter(
			(item) =>
				web3.utils.toChecksumAddress(item.returnValues.referrer) ===
				web3.utils.toChecksumAddress(user)
		);

		_tempData = _tempData.map((item) => {
			const { blockNumber, returnValues, transactionHash: hash } = item;
			const { user, referrer, purchased, reward, timestamp } = returnValues;
			return {
				user,
				referrer,
				blockNumber,
				purchased: web3.utils.fromWei(purchased, "ether"),
				reward: web3.utils.fromWei(reward, "ether"),
				hash,
				timestamp: moment(new Date(parseInt(timestamp * 1000))).fromNow(),
			};
		});
		_tempData = _tempData.reverse();
		return _tempData;
	} catch (error) {
		console.log(error);
		return error.message;
	}
};

const getStakedHistory = async (web3, user, amusedVault) => {
	try {
		const startBlock = await (
			await axios.get(
				"https://amused-finance-backend.herokuapp.com/api/v1/startBlock"
			)
		).data;

		const _endBlock = await web3.eth.getBlockNumber();
		let _tempData = [];
		for (let i = startBlock; i <= _endBlock; i = i + 10000) {
			const _step = i + 10000;
			const _result = await amusedVault.getPastEvents("UNSTKAKE", {
				fromBlock: i,
				toBlock: _step,
			});
			_tempData = [..._tempData, ..._result];
		}

		_tempData = _tempData.filter(
			(item) =>
				web3.utils.toChecksumAddress(item.returnValues.user) ===
				web3.utils.toChecksumAddress(user)
		);
		_tempData = _tempData.map((item) => {
			const { blockNumber, returnValues, transactionHash: hash } = item;
			const { user, tokenValue, ethValue, timestamp } = returnValues;
			return {
				user,
				blockNumber,
				tokenValue: web3.utils.fromWei(tokenValue, "ether"),
				ethValue: web3.utils.fromWei(ethValue, "ether"),
				hash,
				timestamp: moment(new Date(parseInt(timestamp * 1000))).fromNow(),
			};
		});
		_tempData = _tempData.reverse();
		return _tempData;
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
	doughnutChartConfig,
	fixedDataArray,
	getRefferalHistory,
	getStakedHistory,
	cashbackCalculator,
	postData,
};
