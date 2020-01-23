import React from 'react';

const Button = ({ className, ...restProps }) => {

    return (
        <button type="button" className={className || "btn btn-danger"}>
            {restProps && restProps.children}
        </button>
    )
}

export default Button;