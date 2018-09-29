package service;
import java.util.List;

import dao.Task;

public interface TaskService {
	
	public void addTask(Task task);
	public void updateTask(Task Task);
	public Task getTask(int id);
	public void deleteTask(int id);
	public List<Task> getTasks();

}

