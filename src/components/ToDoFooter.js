import React from 'react';
import { Link } from 'react-router-dom';

export const ToDoFooter = () => (
    <div className="ToDoFooter">
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
    </div>
);