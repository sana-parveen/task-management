package controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import dao.Task;
import service.TaskService;



@Controller
@RequestMapping(value="/task")
public class TaskController {
	
	@Autowired
	private TaskService taskService;
	
	
	@RequestMapping(value="/sendtask", method=RequestMethod.POST)
	public ResponseEntity<Void> addingTask(@RequestBody Task task, UriComponentsBuilder ucBuilder) {
		
		taskService.addTask(task);
		HttpHeaders headers = new HttpHeaders();
       		headers.setLocation(ucBuilder.path("/sendtask/{id}").buildAndExpand(task.getId()).toUri());
       		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		
	}
	
	@RequestMapping(value="/gettask", method = RequestMethod.GET)
	public ResponseEntity<List<Task>> listOfTasks() {
		
		List<Task> tasks = taskService.getTasks();
		if(tasks.isEmpty()){
            		return new ResponseEntity<List<Task>>(HttpStatus.NO_CONTENT);
       		 }
		return new ResponseEntity<List<Task>>(tasks, HttpStatus.OK);
	}
	
	@RequestMapping(value="/edit/{id}", method=RequestMethod.GET)
	public ResponseEntity<Task> editTaskPage(@RequestBody Task task, @PathVariable Integer id) {
		Task task = taskService.getTask(id);
		return new ResponseEntity<Task>(task, HttpStatus.OK);
	}
	
	@RequestMapping(value="/iscompleted/{id}", method=RequestMethod.POST)
	public ResponseEntity<Task> editingTask(@PathVariable Integer id) {	
		taskService.updateTask(task);		
		return new ResponseEntity<Task>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(value="/deletetask/{id}", method=RequestMethod.GET)
	public ResponseEntity<Task> deleteTask(@PathVariable Integer id) {
		taskService.deleteTask(id);
		return new ResponseEntity<Task>(HttpStatus.NO_CONTENT);
	}

}
