import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super();
    this.state={
        list: [],
        input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
}

handleChange(val){
    this.setState({
        input: val
    })
}

handleAddTask(){
    this.setState({
        list: [...this.state.list, this.state.input],
        input: ''
    })
}

render(){
   let list = this.state.list.map((element,index)=> {
     return (
       <Todo key={index} task={element}/>
     )
   })
   
    return(
        <div className='App'>
            <h1>My to-do list</h1>
            <input 
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e=>this.handleChange(e.target.value)}
            type="text"/>
            <button
            onClick={this.handleAddTask}>Add</button>
            {list}
        </div>
    )
}
}


export default App;
