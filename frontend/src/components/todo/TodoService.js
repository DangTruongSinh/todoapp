import axios from 'axios';
class TodoService {
    getTodo(id) {
        return axios.get(`https://springboot-react-todoapps.herokuapp.com:8080/todos/${id}`);
    }
    update(todo) {
        return axios.put(`https://springboot-react-todoapps.herokuapp.com:8080/todos/${todo.id}`, todo);
    }
}
export default new TodoService();