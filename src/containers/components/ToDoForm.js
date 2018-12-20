import React from 'react';
import PropTypes from 'prop-types';

export const ToDoForm = (props) => {
    const {
        currentToDo,
        handleSubmit,
        handleInputChange
    } = props;
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={currentToDo}
                onChange={handleInputChange}
            />
            <button 
                onClick={handleSubmit} 
                className="button"
                disabled = {!currentToDo}
            >Add task</button>
        </form>
    )
};

ToDoForm.propTypes = {
    currentToDo: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};
