import React from "react";
import { Accordion } from "react-accordion-collapsible";
import { ErrorBoundary } from "../../../components/ErrorBoundary";

const AccordionCom = ({ defaultOpen, title, content }) => {
	return (
		<div className="p-0 my-3 rounded-t-xl bg-white">
			<Accordion title={title} defaultOpen={defaultOpen} content={content} />
		</div>
	);
};

export default ErrorBoundary(AccordionCom);
