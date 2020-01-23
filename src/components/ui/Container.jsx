import React from 'react';

const Container = (props) => {
    const style = {
        padding: "10px"
    }
    return (
        <div className="container-fluid text-center" style={style}>
            {props && props.children}
        </div>
    )
}

export default Container;