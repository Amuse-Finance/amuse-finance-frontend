import React, { useContext, useState } from 'react';
import { web3Context } from '../../components/Context';
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { FaucetContainer } from './styles';

const Faucet = () => {
    const [faucetAmount, setFaucetAmount] = useState("");
    const { user, requestFaucet } = useContext(web3Context);

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

    const _handleSubmit = async e => {
        e.preventDefault();
        await requestFaucet(user, faucetAmount);
    }

    return (
        <FaucetContainer className="grid">
            <div className="grid wrapper">
                <form className="grid" onSubmit={_handleSubmit}>
                    <h2>Request for Testnet Faucet</h2>
                    <input 
                        type="text" 
                        value={user} 
                        placeholder="Enter wallet address" 
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
