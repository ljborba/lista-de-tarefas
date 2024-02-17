import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { changeDone, deleteItem } from "../actions/listAction"

function DoneImg(props) {
    if (props.done) {
        return (
            <img alt="Ícone de Check habilitado." src="./assets/check-circle-fill-svg.svg"></img>
        )
    } else {
        return (
            <img alt="Ícone de Check desabilitado." src="./assets/check-circle-svg.svg"></img>
        )
    }
}

function ListItem(props) {
    
    const dispatch = useDispatch()

    return (
    <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div className="buttonsAction">

                    <button className="buttonDone" onClick={() => { dispatch(changeDone(props.item.id)) }}>
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>

                    <button className="buttonDelete" onClick={() => { dispatch(deleteItem(props.item.id)) }}>
                        <img alt="Ícone de deletar." src="./assets/trash.svg"></img>
                    </button>

                </div>
            </Card>
        </li>)
}

export default ListItem;