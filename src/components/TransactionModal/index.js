import React, { useState } from 'react';
import reactDom from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { ErrorBoundary } from "../ErrorBoundary";
import { shortener } from '../Helper';
import { TransactionWrapper } from './styles';

const TransactionModal = ({ status = false, hash }) => {
    const [modalState, setModalState] = useState(true);
    return reactDom.createPortal (
        <TransactionWrapper className={modalState ? "grid" : "hidden"}>
            <div className="grid main-content">
                <header>Transaction status: {status}</header>
                <p>
                    {
                        hash && (
                            <a href={`https://rinkeby.etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer">
                                transaction hash: {shortener(hash)}
                            </a>
                        )
                    }
                </p>
                <IoMdClose className="close" onClick={() => setModalState(() => !modalState)} />
            </div>
        </TransactionWrapper>,
        document.querySelector("#portal")
    )
}

export default ErrorBoundary(TransactionModal)
