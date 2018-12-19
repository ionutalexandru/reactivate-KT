import React from 'react';
import PropTypes from 'prop-types';

export const ToDoForm = (props) => {
    const {
        currentToDo,
        handleSubmit,
        handleInputChange
    } = props;
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                value={currentToDo}
                onChange={(e) => handleInputChange(e.target.value)}
            />
        </form>
    )
};

ToDoForm.propTypes = {
    currentToDo: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};
