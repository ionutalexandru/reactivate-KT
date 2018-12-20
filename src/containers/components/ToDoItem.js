import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '../../components';

export const ToDoItem = (props) => {
    const {
        todo,
        handleRemove,
        handleToggle,
    } = props;

    return (
        <Box className="ToDo-Item">
            <span className="circle" onClick={() => handleToggle(todo)}>
                {!todo.isCompleted
                    ? <i className="far fa-circle"></i>
                    : <i className="fas fa-check-circle"></i>
                }
            </span>
            <span className="todo-name">{todo.todo}</span>
            <span className="delete-item" onClick={() => handleRemove(todo)}><i className="fas fa-eraser"></i></span>
        </Box>
    );
};

ToDoItem.propTypes = {
    handleRemove: PropTypes.func,
    handleToggle: PropTypes.func,
};