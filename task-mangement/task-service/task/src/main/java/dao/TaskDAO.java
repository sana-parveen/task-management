package dao;

import java.util.List;

public interface TaskDAO {

	public void addTask(Task task);
	public void updateTask(Task task);
	public Task getTask(int id);
	public void deleteTask(int id);
	public List<Task> getTask();

}
