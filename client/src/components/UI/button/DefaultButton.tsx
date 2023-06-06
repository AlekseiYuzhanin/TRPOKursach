import React from "react";
import './MyButton.scss'

interface Props{
    onClick?: () => void;
    children?: React.ReactNode;
    type?: string;
}

const DefaultButton: React.FC<Props>= ({onClick,children}) => {
    return(
        <button className="myButton" onClick={onClick}>
            {children}
        </button>
    )
}



export default DefaultButton;