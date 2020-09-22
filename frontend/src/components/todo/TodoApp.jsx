import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import HeaderComponent from './HeaderComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import ListTodosComponent from './ListTodoComponent';
import WelcomeComponent from './WelcomeComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';
import TodoComponent from './TodoComponent';
class TodoApp extends Component {
    render() {
        return (
            <div className ="TodoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name"  component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos/:id" exact component={TodoComponent}/>
                        <AuthenticatedRoute path="/todos" exact component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}
export default TodoApp;