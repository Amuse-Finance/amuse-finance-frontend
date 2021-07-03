import { useState, useContext, useEffect } from "react";
import { web3Context } from "../../../components/Context";
import Error from "../../../components/Error";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
import TransactionModal from "../../../components/TransactionModal";

const Stake = () => {
    const [approveInput, setApproveInput] = useState("");
    const [stakeInput, setStakeInput] = useState("");
    const [getAllowance, setAllowance] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [txnResponse, setTxnResponse] = useState({ status: false, hash: null });

    const context = useContext(web3Context);
    const { loading, allowance, approve, stake } = context;

    useEffect(() => {
        if(loading) return;
        (async () => {
            const _allowance = await allowance();
            setAllowance(() => parseFloat(_allowance));

            if(txnResponse.status) setTimeout(() => {
                setTxnResponse(()=> ({status: false, hash: null}))
            }, 7000);
        })();
    }, [loading, allowance, txnResponse.status]);

    const validateInput = (_elem, _func, _value) => {
        _elem.preventDefault();
        if(isNaN(_value)) return;
        _func(_value);
    }

    const _handleSubmit = async (e, _func, _value) => {
        e.preventDefault();
        const { status, transactionHash: hash, data } = await _func(_value);
        setApproveInput(() => "");
        setStakeInput(() => "");
        if(!status) {
            setErrorMessage(() => data);
            setTimeout(() => window.location.reload(), 10000);
        }
        setTxnResponse(()=> ({status: true, hash}));
    }

    return (
        <form className="grid">
            <h2>Lock AMD</h2>
            <input 
                type="text" value={approveInput} 
                placeholder="Enter amount to approve" 
                onChange={ e => validateInput(e, setApproveInput, e.target.value) } 
            />
            <input 
                type="text" value={stakeInput} 
                placeholder="Enter amount to lock" 
                onChange={ e => validateInput(e, setStakeInput, e.target.value) } 
            />
            <button 
                className={
                    (getAllowance > 0 && approveInput.length  < 1) || (stakeInput.length  > 0)
                        ? "hidden" 
                        : ""
                    } 
                onClick={e => _handleSubmit(e, approve, approveInput)}
            >
                Approve    
            </button>
            <button onClick={ e => _handleSubmit(e, stake, stakeInput) }>Lock</button>
            {txnResponse.status && <TransactionModal status="SUCCESS" hash={txnResponse.hash} />}
            { errorMessage.length > 0 && <Error error={errorMessage} /> }
        </form>
    )
}
export default ErrorBoundary(Stake);