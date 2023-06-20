import React from "react";

const Container = props => {
    return(
        <div class={`container-${props.type} ${props.style}`} id={props.id}>{props.children}</div>
    );
};

export default Container;