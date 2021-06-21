import { useState, useContext, useEffect } from "react";
import { web3Context } from "../Context";
import { shortener } from "../Helper";
import { CashbackTransactionWrapper } from "./styles";

export const ReferralHistory = () => {
    const [referralCashbackHistory, setReferralCashbackHistory] = useState([]);
    const { loading, amuseTokenAddress, referralHistory } = useContext(web3Context);
    useEffect(() => {
        if(loading) return;
        (async () => {
            setReferralCashbackHistory(() => referralHistory);
        })();
    }, [loading, referralHistory]);

    let _txnItems = [];

    let _index = referralCashbackHistory.length;
    _txnItems = referralCashbackHistory.map(item => {
        const { user, referrer, reward, hash, timestamp } = item;
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
                        <a href={`https://etherscan.io/address/${user}`} target="_blank" rel="noreferrer">
                            {shortener(user)}
                        </a>
                    </h2>
                </div>
                <div className="grid">
                    <h2>
                        <a href={`https://rinkeby.etherscan.io/token/${amuseTokenAddress}?a=${referrer}`} target="_blank" rel="noreferrer">
                            {parseFloat(reward).toFixed(2)} AMD
                        </a>
                    </h2>
                </div>
                <div className="grid">
                    <h2>
                        <a href={`https://etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer">
                        6th June 2021
                        </a>
                    </h2>
                </div>
            </div>
        );
    })

    return (
        <CashbackTransactionWrapper className="grid">
            <header className="grid header">
                <div className="grid">
                    <h2>#</h2>
                </div>
                <div className="grid">
                    <h2>Hash</h2>
                </div>
                <div className="grid">
                    <h2>User</h2>
                </div>
                <div className="grid">
                    <h2>Rewards</h2>
                </div>
                <div className="grid">
                    <h2>Timestamp</h2>
                </div>
            </header>

            <div className="grid card-container">{_txnItems}</div>
        </CashbackTransactionWrapper>
    )
}
