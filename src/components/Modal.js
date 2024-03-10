import React from "react";
import CustomCard from "./CustomCard";

function Modal(props) {

    function hideModal(e) {
        let target = e.target;
        if(target.id === "modal") {
            props.onHideModal()
        }
        
    }

    return (
        <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hideModal"}>
            <CustomCard className="card-modal">
                {props.children} 
            </CustomCard>
        </div>
    )

}

export default Modal;
