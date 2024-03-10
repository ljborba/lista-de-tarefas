import React, { useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import "./Todo.css";

import { createStore } from "redux";
import { Provider } from "react-redux";

import listReducer from "./reducers/listReducer"

const SAVED_ITEMS = "savedItems"

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS)
    if(actualState) {
        return JSON.parse(actualState)
    } else {
        return []
    }
}

const store = createStore(listReducer, loadState())

store.subscribe(()=>{persistState(store.getState())})

function App() {     

    const [showModal, setShowModal] = useState(false)

    function onHideModal() {
        setShowModal(false)
    }

    return (
        <Provider store={store}>
            <div className="container">
                <header className="header">
                    <h1>Lista de Tarefas</h1>
                    <button className="addButton" onClick={() => { setShowModal(true) }}>+</button>
                </header>
                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
            </div>
        </Provider>
    )
}

export default App;