import React from 'react'
import ReactDOM from 'react-dom'

import InputTODO from './inputtodo.js'
import ToDoList from './todolist.js'
import DoneList from './donelist.js'


const App = () => {
        
    return (
        <div>
            <InputTODO></InputTODO>
            <ToDoList listitems={[]}></ToDoList>
            {/* <DoneList></DoneList> */}
        </div>
    )
}

export default App