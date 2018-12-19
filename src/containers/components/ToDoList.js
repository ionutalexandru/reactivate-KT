import React from 'react';
import PropTypes from 'prop-types';

import {ToDoItem} from './ToDoItem';

export const ToDoList = (props) => {
    const {
        todos,
        handleToggle,
        handleRemove,
    } = props;
    return(
        <div className="ToDo-List">
            <ul>
                {todos.map(todo => (
                    <ToDoItem
                        key = {todo.id}
                        todo = {todo}
                        handleRemove = {handleRemove}
                        handleToggle = {handleToggle}
                    />
                ))}
            </ul>
        </div>
    )
};

ToDoList.propTypes = {
    todos: PropTypes.array.isRequired
};