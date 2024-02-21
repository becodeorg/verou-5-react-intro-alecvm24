import React, {useState} from 'react'
import TodoList from './TodoList'

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
      if (text.trim() !== '') {
        setTodos([...todos, {text}])
        setText('')
      }
    }

    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add new todo'
        />
        <button onClick={addTodo}>Add</button>
        <TodoList todos={todos} />
      </div>
    )
}

export default App;
