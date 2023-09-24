import React from "react";

const Container = props => {
    return(
        <div className={`container-${props.type} ${props.style}`} id={props.id}>{props.children}</div>
    );
};

export default Container;