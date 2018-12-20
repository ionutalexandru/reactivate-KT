import React from 'react';
import { NavLink } from 'react-router-dom';

export const ToDoFooter = () => (
    <div className="ToDo-Footer">
        <NavLink exact activeStyle={{backgroundColor: 'orange'}} to="/">All</NavLink>
        <NavLink activeStyle={{backgroundColor: 'orange'}} to="/active">Active</NavLink>
        <NavLink activeStyle={{backgroundColor: 'orange'}} to="/completed">Completed</NavLink>
    </div>
);