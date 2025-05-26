import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const { userData, setUserData } = useContext(AuthContext);

  const onTaskChange = (employeeFirstName, taskTitle, newStatus) => {
    setUserData((prevUserData) => {
      return prevUserData.map((employee) => {
        if (employee.firstName === employeeFirstName) {
          let updatedTaskStats = { ...employee.taskStats };
          const updatedTasks = employee.tasks.map((task) => {
            if (task.title === taskTitle) {
              const updatedTask = { ...task, ...newStatus };
              if (!task.completed && updatedTask.completed) {
                updatedTaskStats.completed += 1;
                if (task.active) updatedTaskStats.active -= 1;
              } else if (!task.failed && updatedTask.failed) {
                updatedTaskStats.failed += 1;
                if (task.active) updatedTaskStats.active -= 1;
              } else if (!task.active && updatedTask.active) {
                updatedTaskStats.active += 1;
                if (task.newTask) updatedTaskStats.newTask -= 1;
              }

              return updatedTask;
            }
            return task;
          });
          return {
            ...employee,
            tasks: updatedTasks,
            taskStats: updatedTaskStats,
          };
        }
        return employee;
      });
    });
  };
  const taskCompletedStatus = {
    active: false,
    completed: true,
    failed: false,
    newTask: false,
  };
  const taskFailedStatus = {
    active: false,
    completed: false,
    failed: true,
    newTask: false,
  };
  const taskAcceptedStatus = {
    active: true,
    completed: false,
    failed: false,
    newTask: false,
  };
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              onTaskCompleted={() =>
                onTaskChange(data.firstName, elem.title, taskCompletedStatus)
              }
              onTaskFailed={() =>
                onTaskChange(data.firstName, elem.title, taskFailedStatus)
              }
            />
          );
        }
        if (elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              onTaskAccepted={() =>
                onTaskChange(data.firstName, elem.title, taskAcceptedStatus)
              }
            />
          );
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
