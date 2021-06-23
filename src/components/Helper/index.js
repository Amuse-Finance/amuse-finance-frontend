require('dotenv/config');

const toFixed = _amount => Number(_amount).toFixed(2);

const formatNumber = _amount => new Intl.NumberFormat('en', { maximumSignificantDigits: 3 }).format(Number(_amount));

const walletShortner = (_data, _start, _end) => {
    let result = '';
    for(let i = _start;  i < _end; i++) result = [...result, _data[i]];
    return result.join('');
}

const shortener = (_data) => {
    const _splited = _data.split('');
    const _length = _splited.length;

    const firstPart = `${_splited[0]}${_splited[1]}${_splited[2]}${_splited[3]}${_splited[4]}${_splited[5]}${_splited[6]}`;
    const secondPart = `${_splited[_length - 7]}${_splited[_length - 6]}${_splited[_length - 5]}${_splited[_length - 4]}${_splited[_length -3]}${_splited[_length - 2]}${_splited[_length - 1]}`;
    return `${firstPart}...${secondPart}`;
}

const fixedDataArray = async _data => {
    if(_data.length <= 10) return _data;
    let _result = [];
    for(let i = 0; i < 10; i++) _result = [..._result, _data[i]];
    return _result;
}

export { 
    toFixed, 
    formatNumber,
    walletShortner,
    shortener,
    fixedDataArray
}