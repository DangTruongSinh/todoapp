import axios from 'axios';
class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello');
    }
    getListTodos() {
        return axios.get('http://localhost:8080/todos');
    }
    getError() {
        return axios.get('http://localhost:8080/error');
    }
    deleteItem(id) {
        return axios.delete(`http://localhost:8080/todos/${id}`);
    }
}

export default new HelloWorldService();