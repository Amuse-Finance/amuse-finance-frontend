import { useContext, useEffect, useState } from "react";
import { web3Context } from "../../components/Context";
import Stake from "./Stake";
import Unstake from "./Unstake";
import { VaultContainer } from "./styles";

const Vault = () => {
    const [stakedBalance, setStakedBalance] = useState(0);
    const { loading, stakes } = useContext(web3Context);

    useEffect(() => {
        if(loading) return;
        (async () => {
            const { stakes: _stakes } = stakes;
            setStakedBalance(() => _stakes);
        })();
    }, [loading, stakes]);

    return (
        <VaultContainer className="grid">
            <div className="grid wrapper">
                { stakedBalance < 1 ? <Stake /> : <Unstake /> } 
            </div>
        </VaultContainer>
    )
}

export default Vault