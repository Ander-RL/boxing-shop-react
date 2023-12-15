import React from "react";

const AccountTab = (props) => {
    return (
        <div className={`card border-${props.tabSelected} rounded-0`}>
            <div className="card-body">
                <div className="row">
                    <div className="col"><h5 className="card-title">{props.tabName}</h5></div>
                    <div className="col-2"><i class="bi bi-caret-right-fill"></i></div>
                </div>
            </div>
        </div>
    );
};

export default AccountTab;