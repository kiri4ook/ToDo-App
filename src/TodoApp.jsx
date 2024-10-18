import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterSortControls from './components/FilterSortControls';
import './App.css';
import { useTodoViewModel } from './todoViewModel'; // Импортируем ViewModel

function TodoApp() {
  const {
    todos,
    addTodo,
    deleteTodo,
    updateTodoStatus,
    filter,
    sort,
    setFilter,
    setSort,
  } = useTodoViewModel(); // Используем ViewModel

  return (
    <div className="App">
      <div className='wrapp'>
        <h1>Just Do It...</h1>
        <TodoForm onAddTodo={addTodo} />
        <FilterSortControls
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onUpdateTodoStatus={updateTodoStatus}
        />
      </div>
    </div>
  );
}

export default TodoApp;
