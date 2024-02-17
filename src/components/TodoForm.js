import React, { useState } from "react";
import { addItem } from "../actions/listAction";
import { useDispatch } from "react-redux";

function TodoForm(props) {  

    const [text, setText] = useState(""); // Estado
    const dispatch = useDispatch();

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItemEvent(event) {
        event.preventDefault();
        if (text) {
            dispatch(addItem(text))
            setText("")
            props.onHideModal();
        }
    }

    return (
        <form className="form-modal">
            <input className="form-input" type="text" placeholder="Digite a tarefa" value={text} onChange={handleChange}></input>
            <button className="form-addButton-modal" onClick={addItemEvent}>Adicionar</button>
        </form>
    )
}

export default TodoForm;