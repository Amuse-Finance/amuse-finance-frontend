import {useState, useContext, useEffect } from "react";
import { web3Context } from "../Context";
import { fromWei, getNormalTransactionLists, shortener } from "../Helper";
import Loading from "../Loading";
import { NormalTransactionWrapper } from "./styles";
require('dotenv/config');

export const NormalTransaction = () => {
    const [transactionData, setTransactionData] = useState([]);
    const context = useContext(web3Context);
    const { loading, web3, user } = context;
    useEffect(() => {
        if(loading) return false;
        (async () => {
                try {
                    const _result = await getNormalTransactionLists(web3, user);
                    setTransactionData(() => _result);
                } catch (error) {
                    console.log(error);
                }
            }
        )();

    }, [loading, web3, user]);

    if(loading) return <Loading />;
    let _txnItems = [];

    if(transactionData.length > 0) {
        _txnItems = transactionData.map((item, i) => {
            const { hash, from, to, value, gasPrice, gasUsed } = item;
            const gasFee = (fromWei(web3, gasPrice, "ether") * gasUsed) * 2400;
            return (
                <div className="grid card" key={i}>
                    <div className="grid">
                        <h2>{i}</h2>
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
    console.log(transactionData);
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