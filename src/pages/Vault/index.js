import { Stake } from "../../components/Stake";
import { VaultContainer } from "./styles";

const Vault = () => {
    return (
        <VaultContainer className="grid">
            <div className="grid wrapper">
                <Stake />
            </div>
        </VaultContainer>
    )
}

export default Vault