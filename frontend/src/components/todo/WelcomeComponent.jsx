import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';
class WelcomeComponent extends Component{
    constructor(){
        super();
        this.state = {
            name :'sinh dang'
        }
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
    }
    render(){
        return (
            <>
                welcome  {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                <div>
                    Click here to get a customized welcome message
                    <button onClick={this.retriveWelcomeMessage} className = "btn btn-success">get message</button>
                </div>
                {/* <button onClick={() => {this.props.history.goBack();}}>Back</button> */}
                
            </>
        );
    }
    retriveWelcomeMessage(){
        HelloWorldService.getError().then(response =>{
            console.log(response);
        }).catch(error => {
            console.log(error.response);
        });
    }
}
export default WelcomeComponent;