import React from "react";
import "./Card.css"

function Card({name, role, city}){
	return (
        <div className="CardContainer">
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{city}</p>
        </div>
    )
};

export default Card;
