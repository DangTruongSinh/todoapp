import axios from 'axios';
class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('https://springboot-react-todoapps.herokuapp.com/hello');
    }
    getListTodos() {
        return axios.get('https://springboot-react-todoapps.herokuapp.com/todos');
    }
    getError() {
        return axios.get('https://springboot-react-todoapps.herokuapp.com/error');
    }
    deleteItem(id) {
        return axios.delete(`https://springboot-react-todoapps.herokuapp.com/todos/${id}`);
    }
}

export default new HelloWorldService();