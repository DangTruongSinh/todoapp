package com.example.springbootreact;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class HelloWorld {
	
	@Autowired
	HelloWorldService helloWorldService;
	
	@GetMapping("/hello") 
	public String helloWorld() {
		return "dang truong sinh";
	}
	
	@GetMapping("/todo")
	public Todo getTodo() {
		return new Todo(1l, "dang truong sinh");
	}
	@GetMapping("/todos")
	public List<Todo> getTodos() {
		return helloWorldService.getAll();
	}
	
	@GetMapping("/error")
	public Todo getError() {
		throw new RuntimeException("server had error");
	}
	@DeleteMapping("/todos/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		Todo todo =  helloWorldService.deleteById(id);
		if(todo != null)
			return ResponseEntity.noContent().build();
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/todos/{id}")
	public Todo getOne(@PathVariable Long id) {
		return helloWorldService.findById(id);
	}
	
	@PutMapping("/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo todo){
		Todo todoResult = helloWorldService.updateTodo(id, todo);
		return new ResponseEntity<Todo>(todoResult, HttpStatus.OK);
	}
}
