import React from "react";
import classes from '../DefaultButton.module.css';

interface Props{
    onClick: () => void;
    children: React.ReactNode;
}

const DefaultButton: React.FC<Props>= ({onClick,children}) => {
    return(
        <button className={classes.defaultButton} onClick={onClick}>
            {children}
        </button>
    )
}



export default DefaultButton;