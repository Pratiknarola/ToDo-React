import React from 'react'
import ReactDOM from 'react-dom'


class Todoitem extends React.Component {

    render() {
        return (
            <div className="item">
                    <input type="checkbox" id={this.props.id} tabIndex="0"/>
                    <label for={this.props.id} >{this.props.label}</label>
            </div>
        )
    }
}



class ToDoList extends React.Component {
    render() {
        return (
            <section className="listContainer">
            <div className="listTitle">
                <h1>To DO List</h1>
                <button id="clearItems" className="button" title="Clear the list" aria-label="Remove all items from the list" tabIndex="0">Clear</button>
            </div>
            <hr/>


            <div id="listItems">
                {this.props.listitems.map((item) => {
                    return <Todoitem id={item.id} label={item.label} />
                })}
            </div>
        </section>
        )
    }
}

export default ToDoList