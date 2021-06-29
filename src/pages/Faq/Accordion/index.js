import React from "react";
import { Accordion } from "react-accordion-collapsible";
import { ErrorBoundary } from "../../../components/ErrorBoundary";

const AccordionCom = ({ defaultOpen }) => {
  return (
    <div className="p-0 my-3 rounded-t-xl bg-white">
      <Accordion
        title="What is a DeFi (decentralized finance)?"
        defaultOpen={defaultOpen}
        content="
      Decentralized finance is a system by which financial products become available on a public decentralized blockchain/etherem network, making them open to anyone to use, rather than going through middlemen like banks or brokerages."
      />
    </div>
  );
};

export default ErrorBoundary(AccordionCom);
