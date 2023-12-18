import React from "react";

const AccountTab = ({isSelected, ...props}) => {

    const tabSelectedHandler = (tab) => {
        isSelected(tab);
    };

    return (
        <div onClick={tabSelectedHandler} className={`card border-${props.tabSelected} rounded-0`}>
            <div className="card-body">
                <div className="row">
                    <div className="col"><h5 className="card-title">{props.tabName}</h5></div>
                    <div className="col-2"><i className="bi bi-caret-right-fill"></i></div>
                </div>
            </div>
        </div>
    );
};

export default AccountTab;