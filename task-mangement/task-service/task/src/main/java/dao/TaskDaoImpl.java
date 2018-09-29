package dao;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class TaskDaoImpl implements TaskDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	private Session getCurrentSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public void addTask(Task task) {
		getCurrentSession().save(task);

	}

	public void updateTask(Task task) {
		Task taskToUpdate = getTask(task.getId());
		taskToUpdate.setTaskName(task.getTaskName());
		taskToUpdate.setTaskDescription(task.getTaskDescription());
		taskToUpdate.setCompleted(task.isCompleted());
		getCurrentSession().update(taskToUpdate);

	}

	public Task getTask(int id) {
		Task task = (Task) getCurrentSession().get(Task.class, id);
		return task;
	}

	public void deleteTask(int id) {
		Task team = getTask(id);
		if (team != null)
			getCurrentSession().delete(team);

	}

	@SuppressWarnings("unchecked")
	public List<Task> getTask() {
		return getCurrentSession().createQuery("from Task").list();
	}
}
