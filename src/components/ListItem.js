import React from "react";
import { useDispatch } from "react-redux";
import { changeDone, deleteItem } from "../actions/listAction"
import CustomCard from "./CustomCard";

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
            <CustomCard className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div className="buttonsAction">

                    <button className="buttonDone" onClick={(e) => { 
                        e.stopPropagation()
                        dispatch(changeDone(props.item.id)) 
                    }}>
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>

                    <button className="buttonDelete" onClick={(e) => { 
                        e.stopPropagation()
                        dispatch(deleteItem(props.item.id)) 
                        }}>
                        <img alt="Ícone de deletar." src="./assets/trash.svg"></img>
                    </button>

                </div>
            </CustomCard>
        </li>)
}

export default ListItem;
