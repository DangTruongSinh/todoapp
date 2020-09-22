import axios from 'axios';
class TodoService {
    getTodo(id) {
        return axios.get(`https://springboot-react-todoapps.herokuapp.com/todos/${id}`);
    }
    update(todo) {
        return axios.put(`https://springboot-react-todoapps.herokuapp.com/todos/${todo.id}`, todo);
    }
}
export default new TodoService();