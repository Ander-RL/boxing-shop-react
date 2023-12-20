import React from "react";

const AccountTab = ({isSelected, ...props}) => {

    const tabSelectedHandler = (tab) => {
        isSelected(tab);
    };

    return (
        <div onClick={tabSelectedHandler} className={`card border-${props.tabSelected}`}>
            <div className="card-body">
                <div className="row">
                    <div className="col"><h5 className="card-title">{props.tabName}</h5></div>
                    <div className="col-2"><i className={props.tabSelected === "dark" ? `bi bi-caret-right-fill` : `bi bi-caret-right`}></i></div>
                </div>
            </div>
        </div>
    );
};

export default AccountTab;