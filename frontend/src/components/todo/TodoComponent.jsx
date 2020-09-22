import { Form, Formik ,Field, ErrorMessage} from 'formik';
import React, { Component } from 'react';
import TodoService from './TodoService';
class TodoComponent extends Component {
    constructor(){
        super();
        this.state = {
            description:''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(values){
        values.id = this.props.match.params.id;
        console.log(values);
        TodoService.update(values).then(result => { 
            console.log(result);
            this.setState(result.data); 
            this.props.history.push('/todos'); 
        }).catch(error => {
            console.log(error.response);
        });
        
    }
    validate(values){
        let errors = {};
        if(!values.description)
            errors.description = 'Enter a description';
        else if(values.description.length < 5)
            errors.description = 'should have atleast 5 characters';
        console.log(values);
        return errors;
    }
    componentDidMount(){
        TodoService.getTodo(this.props.match.params.id)
                    .then(result => {
                        console.log(result);
                        this.setState(result.data);
                    }).catch(error => {
                        console.log(error.response);
                    });
    }
    render() {
        let {description} = this.state;
        return (
            <div>
                my component 
                <Formik initialValues={{description}} onSubmit={this.onSubmit} validate={this.validate} validateOnChange={false} validateOnBlur={false}
                enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <fieldset className = "form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default TodoComponent;