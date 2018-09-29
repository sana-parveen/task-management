package dao;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="task")

public class Task {

	@Id
	@GeneratedValue
	private int taskId;
	private String taskName; 
	private String taskDescription;
	private String isCompleted;

	public int getId() {
		return taskId;
	}

	public void setId(int taskId) {
		this.taskId = taskId;
	}

	@Column(name="task_name")
	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	
	@Column(name="task_description")
	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}

	@Column(name="task_completed")
	public String isCompleted() {
		return isCompleted;
	}

	public void setCompleted(String isCompleted) {
		this.isCompleted = isCompleted;
	}


}


