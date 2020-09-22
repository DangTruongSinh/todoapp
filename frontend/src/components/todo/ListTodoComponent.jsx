import React, { Component } from 'react';
import HelloWorldService from '../../api/todo/HelloWorldService';
class ListTodosComponent extends Component{
    constructor(){
        super();
        this.state = {
            todo:[]
        }
       // this.handleDelete = this.handleDelete.bind(this);
    }
    render(){
        return(
            <>
                <h1>Lists Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            this.state.todo.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.description}</td>
                                    <td><button className="btn btn-danger" onClick = {() => {this.handleDelete(item.id)}}>Delete</button></td>
                                    <td><button className="btn btn-warning" onClick = {() => this.handleUpdate(item.id)}>Update</button></td>
                                </tr>
                            )
                            }
                        
                    </tbody>
                </table>
                <button className="btn btn-success" onClick = {()=> this.props.history.push('/todos/-1')}>Add new</button>
            </>
        );
    }
    handleUpdate(id){
        this.props.history.push(`/todos/${id}`);
    }
    handleDelete(id){
        console.log(id);
        HelloWorldService.deleteItem(id).then(response => {   
            let todos = this.state.todo;
            for(let i = 0; i < todos.length; i++){
                if(todos[i].id === id){
                    todos.splice(i, 1);
                    break;
                }
            }
            this.setState({todo: todos});
        }).catch(error => {
            console.log(error.response);
        });
    }
    componentDidMount(){
        this.refreshClient();
    }
    refreshClient(){
        HelloWorldService.getListTodos()
        .then(response => {
            this.setState({todo: response.data});
        })
        .catch(error => {
            console.log(error.response);
        });
    }
}
export default ListTodosComponent;