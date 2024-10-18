import { useState, useEffect } from 'react';
import { getTodosFromLocalStorage, saveTodosToLocalStorage } from './todoModel';

export const useTodoViewModel = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('date');

    useEffect(() => {
        const storedTodos = getTodosFromLocalStorage();
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            saveTodosToLocalStorage(todos);
        }
    }, [todos]);

    const addTodo = (newTodoTitle) => {
        const newTodo = {
            id: Date.now(),
            title: newTodoTitle,
            completed: false,
            timestamp: new Date().toISOString(),
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const deleteTodo = (todoId) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    };

    const updateTodoStatus = (todoId, newCompletedState) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === todoId ? { ...todo, completed: newCompletedState } : todo
            )
        );
    };

    // Фильтрация и сортировка
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'incomplete') return !todo.completed;
        return true;
    });

    const sortedTodos = filteredTodos.sort((a, b) => {
        if (sort === 'date') {
            return new Date(a.timestamp) - new Date(b.timestamp);
        } else {
            return b.completed - a.completed;
        }
    });

    return {
        todos: sortedTodos,
        addTodo,
        deleteTodo,
        updateTodoStatus,
        setFilter,
        setSort,
        filter,
        sort,
    };
};
