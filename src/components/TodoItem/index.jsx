import React from "react";
import trash from '../../images/trash.png'
import './styles.css';

const TodoItem = ({ todo, onDelete, onUpdateStatus }) => {

    const handleCheckboxChange = () => {
        const newCompletedState = !todo.completed;
        onUpdateStatus(todo.id, newCompletedState);
    };

    return (
        <div className="item_wrapp">
            <span className="todo-date">{new Date(todo.timestamp).toLocaleString()}</span>
            <div className="todo-item">
                <span
                    className="todo-title"
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "#afafaf" : "#ffffff"
                    }}
                >
                    {todo.title}
                </span>
                <div>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleCheckboxChange}
                        className="todo-checkbox"
                    />
                    <button className="delete-button" onClick={() => onDelete(todo.id)}>
                        <img src={trash} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;



