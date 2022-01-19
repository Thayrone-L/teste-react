import "./Card.css"
import React from "react";

export default props =>
    <div className="Card">
        <div className="Cheader">
            { props.titulo}
        </div>
        <div className="Cbody">
            { props.children}
        </div>
    </div>