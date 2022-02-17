import React from "react";
import {Spin} from "antd";

export const Spinner = (props) => {
    return (
        <div className="spinner">
            <Spin size={props.size || "small"} tip={props.tip ? props.tip : ""}/>
        </div>
    )
};