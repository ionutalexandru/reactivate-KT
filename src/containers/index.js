import React, {Component, Fragment} from 'react';

// Import components here
import {ToDoForm, ToDoList} from './components';
import {dbActions} from '../actions';

class ToDo extends Component {
    state = {
        currentToDo: ToDo.defaultProps.currentToDo,
        isCompleted: ToDo.defaultProps.isCompleted,
        todos: ToDo.defaultProps.todos,
    };

    handleInputChange = (e) => this.setState({currentToDo: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        const callback = () => {
            this.setState({
                currentToDo: ToDo.defaultProps.currentToDo,
                isCompleted: ToDo.defaultProps.isCompleted,
            }, this.updateTodoList);
        };
        const {currentToDo, isCompleted} = this.state;
        if(this.state.currentToDo !== ToDo.defaultProps.currentToDo){
            dbActions.addTodo({todo: currentToDo, isCompleted}, callback);
        };
    };
     
    updateTodoList = () => dbActions.getAll().then(todos => this.setState({todos}));

    handleToggle = (todo) => {
        dbActions.editTodo({...todo, isCompleted: !todo.isCompleted}, this.updateTodoList);
    };

    handleRemove = (todo) => {
        dbActions.removeTodo(todo.id, this.updateTodoList);
    };

    componentDidMount(){
        this.unsuscribe = dbActions.listenDB(this.updateTodoList);
    };

    componentWillUnmount(){
        this.unsuscribe();
    };

    getTodosFiltered = (todos = this.state.todos, filter = this.props.filter) => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.isCompleted);
            case 'completed':
                return todos.filter(todo => todo.isCompleted);
            default:
                return todos;
        }
    };

    render(){
        const todos = this.getTodosFiltered();
        const {currentToDo} = this.state;
        return (
            <Fragment>
                <ToDoForm 
                    currentToDo = {currentToDo}
                    handleInputChange = {this.handleInputChange}
                    handleSubmit = {this.handleSubmit}
                />
                <ToDoList
                    todos={todos}
                    handleToggle = {this.handleToggle}
                    handleRemove = {this.handleRemove}
                />
            </Fragment>
        );
    };
};

ToDo.defaultProps = {
    currentToDo: '',
    isCompleted: false,
    todos: [],
};

export default ToDo;