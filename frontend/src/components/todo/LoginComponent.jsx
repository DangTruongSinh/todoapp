import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            hasLoginFailed:false,
            hasLoginSuccess: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render(){
        return (
            <>
                <div>
                    {this.state.hasLoginSuccess && <p>Login Success</p>}  
                    {this.state.hasLoginFailed && <p>Login fail</p>}
                </div>
                User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.handleLogin} className="btn btn-success">Login</button>
            </>
        );
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    } 
    handleLogin(){
        if(this.state.username === 'sinh' && this.state.password === '123'){
            AuthenticationService.registerSuccessfullLogin(this.state.username);
            this.props.history.push(`/welcome/${this.state.username}`, {some:'aheheh'});

        }
        else
            this.setState({hasLoginSuccess : false, hasLoginFailed: true});
    }
}

export default LoginComponent;