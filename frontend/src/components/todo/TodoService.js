import axios from 'axios';
class TodoService {
    getTodo(id) {
        return axios.get(`http://localhost:8080/todos/${id}`);
    }
    update(todo) {
        return axios.put(`http://localhost:8080/todos/${todo.id}`, todo);
    }
}
export default new TodoService();