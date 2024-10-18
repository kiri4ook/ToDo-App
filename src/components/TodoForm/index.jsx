import React, { useState } from "react";
import './styles.css';

const TodoForm = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            onAddTodo(newTodo);
            setNewTodo("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-wrapper">
                <input className="form-input"
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter a new task..."
                />
                <button className="form-button" type="submit">Add</button>
            </div>
        </form>
    );
};

export default TodoForm;
