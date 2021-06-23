import { useContext } from "react";
import { web3Context } from "../Context";
import { shortener } from "../Helper";
import Loading from "../Loading";
import { NormalTransactionWrapper } from "./styles";
require('dotenv/config');

export const NormalTransaction = () => {
    const context = useContext(web3Context);
    const { loading, fromWei, transactionHistory } = context;
    if(loading) return <Loading />;

    let _txnItems = [];

    if(transactionHistory.length > 0) {
        let _index = transactionHistory.length;
        _txnItems = transactionHistory.map(item => {
            const { hash, from, to, value, gasPrice, gasUsed } = item;
            const gasFee = (fromWei(gasPrice) * gasUsed) * 2400;
            const _currentIndex = _index;
            _index--;
            return (
                <div className="grid card" key={_currentIndex}>
                    <div className="grid">
                        <h2>{_currentIndex}</h2>
                    </div>
                    <div className="grid">
                        <h2>
                            <a href={`https://etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer">
                                {shortener(hash)}
                            </a>
                        </h2>
                    </div>
                    <div className="grid">
                        <h2>
                            <a href={`https://etherscan.io/address/${from}`} target="_blank" rel="noreferrer">
                                {shortener(from)}
                            </a>
                        </h2>
                    </div>
                    <div className="grid">
                        <h2>
                            <a href={`https://etherscan.io/address/${to}`} target="_blank" rel="noreferrer">
                                {shortener(to)}
                            </a>
                        </h2>
                    </div>
                    <div className="grid">
                        <h2>
                            <a href={`https://etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer">
                                {parseFloat(value).toFixed(3)} ETH
                            </a>
                        </h2>
                    </div>
                    <div className="grid">
                        <h2>
                            <a href={`https://etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer">
                            ${parseFloat(gasFee).toFixed(3)}
                            </a>
                        </h2>
                    </div>
                </div>
            );
        })
    }

    return(
        <NormalTransactionWrapper className="grid">
            <header className="grid header">
                <div className="grid">
                    <h2>#</h2>
                </div>
                <div className="grid">
                    <h2>Hash</h2>
                </div>
                <div className="grid">
                    <h2>From</h2>
                </div>
                <div className="grid">
                    <h2>To</h2>
                </div>
                <div className="grid">
                    <h2>Value</h2>
                </div>
                <div className="grid">
                    <h2>Tx Fees in USD</h2>
                </div>
            </header>
            <div className="grid card-container">{_txnItems}</div>
        </NormalTransactionWrapper>
    );
}