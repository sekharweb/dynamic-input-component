import React from 'react';
import classes from '../Input/Input.css'

const Input = (props) => {
 
    return (
        <div className={classes.Input}>
            <input type={props.type} />
        </div>
        
    )
} 

export default Input;