CREATE TABLE TASK
(TASKID int(6) NOT NULL AUTO_INCREMENT,
TASK_NAME VARCHAR2(40),
TASK_DESCRIPTION VARCHAR(60),
TASK_COMPLETED VARCHAR(10)
PRIMARY KEY (TASKID)
);
COMMIT;
