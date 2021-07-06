import { useContext } from "react";
import { web3Context } from "../../../components/Context";
import { getPath, shortener } from "../../../components/Helper";
import { RefferalWrapper } from "./styles";
import { ErrorBoundary } from "../../../components/ErrorBoundary";

const ReferralHistory = () => {
    const { networkType, amuseTokenAddress, referralHistory } = useContext(web3Context);

    let _index = referralHistory.length;
    const _txnItems = referralHistory.map(item => {
        const { user, referrer, purchased, reward, hash, timestamp } = item;
        const _currentIndex = _index;
        _index--;
        return (
            <div className="grid card" key={_currentIndex}>
                <div className="grid">
                    <h2>{_currentIndex}</h2>
                </div>
                <div className="grid">
                    <h2>
                        <a href={`${getPath(networkType)}/tx/${hash}`} target="_blank" rel="noreferrer">
                            {shortener(hash)}
                        </a>
                    </h2>
                </div>
                <div className="grid">
                    <h2>
                        <a href={`${getPath(networkType)}/address/${user}`} target="_blank" rel="noreferrer">
                            {shortener(user)}
                        </a>
                    </h2>
                </div>
                <div className="grid">
                    <h2>
                        <a href={`${getPath(networkType)}/tx/${hash}`} target="_blank" rel="noreferrer">
                            {parseFloat(purchased).toFixed(2)} AMD
                        </a>
                    </h2>
                </div>
                <div className="grid">
                    <h2>
                        <a href={`${getPath(networkType)}/token/${amuseTokenAddress}?a=${referrer}`} target="_blank" rel="noreferrer">
                            {parseFloat(reward).toFixed(2)} AMD
                        </a>
                    </h2>
                </div>
                <div className="grid">
                    <h2>
                        <a href={`${getPath(networkType)}/tx/${hash}`} target="_blank" rel="noreferrer">
                            {timestamp}
                        </a>
                    </h2>
                </div>
            </div>
        );
    })

    return (
        <RefferalWrapper>
            <header className="grid header">
                <div className="grid">
                    <h2>#</h2>
                </div>
                <div className="grid">
                    <h2>Hash</h2>
                </div>
                <div className="grid">
                    <h2>Wallet</h2>
                </div>
                <div className="grid">
                    <h2>Purchased Amount</h2>
                </div>
                <div className="grid">
                    <h2>Rewards Amount</h2>
                </div>
                <div className="grid">
                    <h2>Date</h2>
                </div>
            </header>

            <div className="grid card-container">{_txnItems}</div>
        </RefferalWrapper>
    )
}


export default ErrorBoundary(ReferralHistory);