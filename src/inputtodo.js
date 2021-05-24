import React from 'react'
import ReactDOM from 'react-dom'



class InputTODO extends React.Component {
    render() {
        return (

        <section className="newItemEntry">
            <form id="newItemForm">
                <label for="newItem">Enter a new to do item</label>
                <input id="newItem" type="text" size="40" autoComplete="on" placeholder="Add item" tabIndex="0"/>
                <button id="addItem" className="button" title="Add new item" aria-label="Add new item to list" tabIndex="0"> + </button>
            </form>
        </section>
                    
            )
    }
}

export default InputTODO