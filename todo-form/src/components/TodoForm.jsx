import React, { useState } from 'react';
import './TodoForm.css';
import Button from 'ui_components/Button';
import Input from 'ui_components/Input';
import Card from 'ui_components/Card';

const TodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState('');

  const handleClick = () => {
    console.log('Button clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      onAdd(todo);
      setTodo('');
    }
  };

  return (
    <Card title="Add New Todo">
      <form className="todo-form" onSubmit={handleSubmit}>
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="What needs to be done?"
          label="New Todo"
        />
        <Button type="submit" variant="primary" onClick={handleClick}>
          Add Todo
        </Button>
      </form>
    </Card>
  );
};

export default TodoForm;