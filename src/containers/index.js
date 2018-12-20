import React, {Component, Fragment} from 'react';

// Import components here
import {ToDoForm, ToDoList} from './components';
import {dbActions} from '../actions';

class ToDo extends Component {
    state = ToDo.defaultProps;

    handleInputChange = (e) => this.setState({currentToDo: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();            
        const {currentToDo, isCompleted} = this.state;
        if(currentToDo.trim()!== 0){
            dbActions.addTodo({todo: currentToDo.trim(), isCompleted});
            this.setState({
                currentToDo: ToDo.defaultProps.currentToDo,
                isCompleted: ToDo.defaultProps.isCompleted,
            }, this.updateTodoList);
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

    handleRemoveAll = (e) => {
        e.preventDefault();
        dbActions.deleteAll(this.state.todos);
    };

    render(){
        const todos = this.getTodosFiltered();
        return (
            <Fragment>
                <ToDoForm 
                    currentToDo = {this.state.currentToDo}
                    handleInputChange = {this.handleInputChange}
                    handleSubmit = {this.handleSubmit}
                />
                <ToDoList
                    todos={todos}
                    handleToggle = {this.handleToggle}
                    handleRemove = {this.handleRemove}
                    handleRemoveAll = {this.handleRemoveAll}
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