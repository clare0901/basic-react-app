import React, { Component } from 'react';
import TodoItem from './TodoItem'
import data from '../Data'
import '../App.css';

class TodoList extends Component {
    constructor(){
        super()
        this.state = {
            todos : data
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState( prevState => {
            const updatedTodos = this.state.todos.map( eachTodo => {
                if(eachTodo.id === id){
                    return{
                        ...eachTodo,
                        completed: !eachTodo.completed
                    }
                }
                // if the if statement isnt true
                return eachTodo
            })
            return{
                todos:updatedTodos
            }
        })
        
    }

    render() { 
        const TodoItemComponents = this.state.todos.map( todo => 
            <TodoItem item={todo} key={todo.id} handleChange={this.handleChange} />
        )
        return ( 
            <div className="todo-list">
                {TodoItemComponents}
            </div>
        )
    }
}
 
export default TodoList;