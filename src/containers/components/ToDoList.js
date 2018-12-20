import React from 'react';
import PropTypes from 'prop-types';

import {ToDoItem} from './ToDoItem';

const deleteButtonStyle = {width: '150px', margin: '15px auto'};

export const ToDoList = (props) => {
    const {
        todos,
        handleToggle,
        handleRemove,
        handleRemoveAll,
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
            <button onClick={handleRemoveAll} disabled={todos.length===0} className="button" style={deleteButtonStyle}>Delete All</button>
        </div>
    )
};

ToDoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleRemoveAll: PropTypes.func.isRequired,
};