import React from 'react';
import '../App.css';

function TodoItem(props) {
    const completedStyle = {
        color: "grey",
        textDecoration:"line-through",        
        fontSize:"15px"
    }
    const style = {
        color:"#000",
        fontSize:"15px"
    }
    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={ () => props.handleChange(props.item.id) }
            />
            <span style={ props.item.completed ? completedStyle : style } >{props.item.task}</span>
        </div>
    )
}

export default TodoItem