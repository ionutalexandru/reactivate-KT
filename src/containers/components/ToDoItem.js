import React from 'react';
import PropTypes from 'prop-types';

export const ToDoItem = (props) => {
    const {
        todo,
        handleRemove,
        handleToggle,
    } = props;

    return (
        <li>
            <span className="delete-item">
                <p onClick={() => handleRemove(todo)}>X</p>
            </span>
            <input type="checkbox" onChange={() => handleToggle(todo)} defaultChecked={todo.isCompleted} />{todo.todo}
        </li>
    );
};

ToDoItem.propTypes = {
    handleRemove: PropTypes.func,
    handleToggle: PropTypes.func,
};