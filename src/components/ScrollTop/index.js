import { BsArrowUp } from "react-icons/bs";
import { ErrorBoundary } from "../ErrorBoundary";
import './scrollTop.css';

const ScrollTop = () => {
    return (
        <div className='grid scrollTop scroll-link' 
            onClick={() => window.scrollTo({top: 0, left: 0})} >
            <span>
                <BsArrowUp className="icon" />
            </span>
        </div>
    )
}

export default ErrorBoundary(ScrollTop);