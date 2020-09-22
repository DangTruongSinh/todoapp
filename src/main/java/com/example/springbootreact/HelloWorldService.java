package com.example.springbootreact;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class HelloWorldService {
	
	List<Todo> lists = new ArrayList<Todo>();
	static long i = 0;
	{
		lists.add(new Todo(i++, "spring"));
		lists.add(new Todo(i++, "react"));
		lists.add(new Todo(i++, "angular"));
	}
	public List<Todo> getAll(){
		return lists;
	}
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		lists.remove(todo);
		return todo;
	}
	public Todo findById(long id) {
		for(Todo x : lists) {
			if(x.getId() == id)
				return x;
		}
		return null;
	}
	public Todo updateTodo(long id, Todo todoSource) {
		Todo todoDb = findById(id);
		if(todoSource.getId() != -1) {
			BeanUtils.copyProperties(todoSource, todoDb);
		}
		else {
			todoDb = new Todo(i++, todoSource.getDescription());
			lists.add(todoDb);
		}
		return todoDb;
	}
}
