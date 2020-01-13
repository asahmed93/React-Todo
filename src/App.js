import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Pay Bills',
          id: 1,
          completed: false
        },
        {
          task: 'Save money',
          id: 2,
          completed: false
        },
        {
          task: 'Splurge',
          id: 3,
          completed: false
        }
      ]
    }
  }
  
  handleComplete = id => {
    const todos = this.state.todos.map(todo => {
      console.log(id)
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo
      } else {
        return todo
      }
    })
    this.setState({todos}) 
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} handleComplete={this.handleComplete}/>
      </div>
    );
  }
}

export default App;
