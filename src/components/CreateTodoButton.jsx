import React from "react";
import "../assets/styles/CreateTodoButton.css";

function CreateTodoButton(){

    const onClickButton = (msg) => {
        alert(msg);
    };

    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("Click en el botón")}
        >
            +
        </button>
    );
}

export { CreateTodoButton };
