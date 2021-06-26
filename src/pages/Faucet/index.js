import React, { useContext, useEffect, useState } from 'react';
import { web3Context } from '../../components/Context';
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { FaucetContainer } from './styles';

const Faucet = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [faucetAmount, setFaucetAmount] = useState("");
    const { loading, user } = useContext(web3Context);

    useEffect(() => {
        if(loading) return;
        setWalletAddress(() => user);
    }, [loading, user])

    const validateInput = (_elem, _func, _excluded) => {
        _elem.preventDefault();
        if(!_excluded && isNaN(_elem.target.value)) return;
        _func(
            _excluded
                ? _elem.target.value
                : _elem.target.value <= 1000
                    ? _elem.target.value
                    : 1000
        );
    }

    return (
        <FaucetContainer className="grid">
            <div className="grid wrapper">
                <form className="grid">
                    <h2>Request for Testnet Faucet</h2>
                    <input 
                        type="text" value={walletAddress} 
                        placeholder="Enter wallet address" 
                        onChange={e => validateInput(e, setWalletAddress, true)} 
                    />
                    <input 
                        type="text" value={faucetAmount} 
                        placeholder="Enter amount (max is 1000 AMD)" 
                        onChange={e => validateInput(e, setFaucetAmount)} 
                    />
                    <button>Request</button>
                </form>
            </div>
        </FaucetContainer>
    )
}

export default ErrorBoundary(Faucet)
