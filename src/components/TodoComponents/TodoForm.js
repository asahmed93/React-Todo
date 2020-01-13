import React from 'react';

const TodoForm = props => {
    return(
        <form>
            <input onChange={props.handleChange} name="todo" value={props.value} placeholder="insert todo"/>
            <button onClick={props.handleAdd}>Add</button>
        </form>
    )

}
export default TodoForm