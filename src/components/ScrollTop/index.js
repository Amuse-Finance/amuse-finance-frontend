import './scrollTop.css';
import { BsArrowUp } from "react-icons/bs";

export const ScrollTop = () => {
    return (
        <div className='grid scrollTop scroll-link' 
            onClick={() => window.scrollTo({top: 0, left: 0})} >
            <span>
                <BsArrowUp className="icon" />
            </span>
        </div>
    )
}