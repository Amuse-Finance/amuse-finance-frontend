import { memo, useState } from "react";
import reactDom from "react-dom";
import "../../App.css";
import { ErrorBanner } from "./styles";
import { VscChromeClose } from "react-icons/vsc";

const Error = ({ error }) => {
    const [close, setClose] = useState(false);

    return reactDom.createPortal(
        <ErrorBanner className={close ? "hidden" : "grid error-banner"}>
            <header className="grid">
                <h1>Execution failed</h1>
                <button type="button" onClick={() => setClose(true)}>
                    <VscChromeClose />
                </button>
            </header>
            
            <div />
            <section>
                <p>
                    Contract execution errored with the following message (see below).
                </p>
                <p className="revert-reason">
                    Revert reason: {error}
                </p>
            </section>
        </ErrorBanner>,
        document.querySelector("#portal")
    )
}

export default memo(Error);