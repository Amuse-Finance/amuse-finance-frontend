import { useState } from "react";
import { VaultContainer } from "./styles";

const Vault = () => {
    const [approveInput, setApproveInput] = useState("");
    const [stakeInput, setStakeInput] = useState("");


    const validateInput = (_elem, _func, _value) => {
        _elem.preventDefault();
        if(isNaN(_value)) return;
        _func(_value);
    }

    return (
        <VaultContainer className="grid">
            <div className="grid wrapper">
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
                    <button>Lock</button>
                </form>
            </div>
        </VaultContainer>
    )
}

export default Vault