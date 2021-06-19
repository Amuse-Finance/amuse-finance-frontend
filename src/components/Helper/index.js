require('dotenv/config');

const etherscanApiKey = process.env.REACT_APP_etherscanAPi;
const startBlock = 12634523;

const toFixed = _amount => Number(_amount).toFixed(2);

const toWei = (web3, _amount, _unit) => web3.utils.toWei(_amount.toString(), _unit);

const fromWei = (web3, _amount, _unit) => web3.utils.fromWei(_amount.toString(), _unit);

const formatNumber = _amount => new Intl.NumberFormat('en', { maximumSignificantDigits: 3 }).format(Number(_amount));

const walletShortner = (_data, _start, _end) => {
    let result = '';
    for(let i = _start;  i < _end; i++) result = [...result, _data[i]];
    return result.join('');
}


const getNormalTransactionLists = async (web3, user) => {
    try {
        let tempData = [];
        let _currentBlock = 0;
        const _endBlock = await web3.eth.getBlockNumber();
        for(_currentBlock = startBlock; _currentBlock <= _endBlock; _currentBlock += 10000) {
            const _step = _currentBlock + 10000;
            const result = await (await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${user}&startblock=${_currentBlock}&endblock=${_step}&sort=desc&apikey=${etherscanApiKey}`)).json();
            tempData = [...tempData, ...result.result];
        }
        return formatTransactionLists(web3, tempData);
    } catch (error) { return error.message; }
}

const formatTransactionLists = async (web3, _data) => {
    try {
        let result = await _data.map(item => {
            const { hash, from, to, gasPrice, gasUsed, nonce, value, blockNumber } = item;
            return {
                hash,
                from,
                to,
                gasPrice,
                gasUsed,
                nonce,
                blockNumber,
                value: fromWei(web3, value, "ether")
            }
        })

        result = result.reverse();
        return result;
    } catch (error) {
        return error.message;
    }
}

const shortener = (_data) => {
    const _splited = _data.split('');
    const _length = _splited.length;

    const firstPart = `${_splited[0]}${_splited[1]}${_splited[2]}${_splited[3]}${_splited[4]}${_splited[5]}${_splited[6]}`;
    const secondPart = `${_splited[_length - 7]}${_splited[_length - 6]}${_splited[_length - 5]}${_splited[_length - 4]}${_splited[_length -3]}${_splited[_length - 2]}${_splited[_length - 1]}`;
    return `${firstPart}...${secondPart}`;
}

export { 
    toFixed, 
    fromWei,
    toWei,
    formatNumber,
    walletShortner,
    getNormalTransactionLists,
    shortener
}