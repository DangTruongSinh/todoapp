import axios from 'axios';
class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('https://springboot-react-todoapps.herokuapp.com:8080/hello');
    }
    getListTodos() {
        return axios.get('https://springboot-react-todoapps.herokuapp.com:8080/todos');
    }
    getError() {
        return axios.get('https://springboot-react-todoapps.herokuapp.com:8080/error');
    }
    deleteItem(id) {
        return axios.delete(`https://springboot-react-todoapps.herokuapp.com:8080/todos/${id}`);
    }
}

export default new HelloWorldService();