import React, { useState} from "react";
import './Contactpopup.css'

function Contactpopup(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className = "popup-inner">
                <button className = "closebutton" onClick={ () => props.setTrigger(false)}>
                    Close

                </button>
                <button className = "contactAddition">
                    add

                </button>
                { props.children }
            </div>
        </div>
) : " ";
}




export default Contactpopup;

