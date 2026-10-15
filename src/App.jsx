import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  function addTodo(e) {
    e.preventDefault()
    if (!text.trim()) return
    setTodos([...todos, { id: crypto.randomUUID(), text: text.trim(), done: false }])
    setText('')
  }

  return (
    <main>
      <h1>Todos</h1>
      <form onSubmit={addTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="What needs doing?" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((t) => <li key={t.id}>{t.text}</li>)}
      </ul>
    </main>
  )
}

export default App