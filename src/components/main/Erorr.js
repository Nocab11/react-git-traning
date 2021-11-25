import React from "react";
import {Link} from "react-router-dom";

const Error = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <Link to="/" >На главную</Link>
            Error
        </div>
    )
}

export default Error;