import React from "react";
import TodoItem from "../TodoItem";
import './styles.css';

const TodoList = ({ todos, onDeleteTodo, onUpdateTodoStatus }) => {
    return (
        <div>
            {todos.slice().reverse().map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDeleteTodo}
                    onUpdateStatus={onUpdateTodoStatus}
                />
            ))}
        </div>
    );
};

export default TodoList;

