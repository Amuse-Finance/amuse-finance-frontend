import { useState, useContext, useEffect } from "react";
import { web3Context } from "../Context";

export const Stake = () => {
    const [approveInput, setApproveInput] = useState("");
    const [stakeInput, setStakeInput] = useState("");
    const [getAllowance, setAllowance] = useState(0);

    const context = useContext(web3Context);
    const { loading, allowance, approve, stake } = context;

    useEffect(() => {
        if(loading) return;
        (async () => {
            const _allowance = await allowance();
            setAllowance(() => parseFloat(_allowance));
        })();
    }, [loading, allowance]);

    const validateInput = (_elem, _func, _value) => {
        _elem.preventDefault();
        if(isNaN(_value)) return;
        _func(_value);
    }

    const _exec = (e, _func, _value) => {
        e.preventDefault();
        _func(_value);
    }

    return (
        <form className="grid">
            <h2>Lock AMD</h2>
            <input 
                type="text" value={approveInput} 
                placeholder="Enter amount to approve" 
                onChange={ e => validateInput(e, setApproveInput, e.target.value) } 
                disabled={false}
            />
            <input 
                type="text" value={stakeInput} 
                placeholder="Enter amount to lock" 
                onChange={ e => validateInput(e, setStakeInput, e.target.value) } 
                disabled={false}
            />
            <button className={getAllowance > 0 && approveInput.length  < 1 ? "hidden" : ""} onClick={e => _exec(e, approve, approveInput)}>
                Approve    
            </button>
            <button onClick={ e => _exec(e, stake, stakeInput) }>Lock</button>
        </form>
    )
}
