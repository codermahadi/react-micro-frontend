import React, { useState, Suspense } from 'react';
const TodoList = React.lazy(() => import('todo_list/TodoList'));
const TodoForm = React.lazy(() => import('todo_form/TodoForm'));

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Suspense fallback="Loading form...">
        <TodoForm onAdd={handleAddTodo} />
      </Suspense>
      <Suspense fallback="Loading list...">
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </Suspense>
    </div>
  );
}

export default App;
