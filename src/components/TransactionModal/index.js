import React from 'react';
import reactDom from 'react-dom';
import { ErrorBoundary } from "../ErrorBoundary";
import { TransactionWrapper } from './styles';

const TransactionModal = () => {
    return reactDom.createPortal (
        <TransactionWrapper className="grid">
            
        </TransactionWrapper>,
        document.querySelector("#portal")
    )
}

export default ErrorBoundary(TransactionModal)
