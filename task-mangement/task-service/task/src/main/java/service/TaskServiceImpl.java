package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import dao.Task;
import dao.TaskDAO;

public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskDAO taskDAO;

	public void addTask(Task task) {
		taskDAO.addTask(task);

	}

	public void updateTask(Task task) {
		taskDAO.updateTask(task);

	}

	public Task getTask(int id) {
		return taskDAO.getTask(id);
	}

	public void deleteTask(int id) {
		taskDAO.deleteTask(id);

	}

	public List<Task> getTasks() {
		return taskDAO.getTask();
	}

}
