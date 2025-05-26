import React, {useState} from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {
  const {userData, setUserData} = useContext(AuthContext);


  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const[category, setCategory] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {title: taskTitle, date: taskDate, category, description: taskDescription, active:false, failed: false, newTask:true, completed:false}
    
    const updatedUserData =  userData.map(function(elem) {
      if(elem.firstName == assignTo) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskStats: {
            ...elem.taskStats,
            newTask: elem.taskStats.newTask + 1,
          },
        }
      }
      return elem
    });
    setUserData(updatedUserData);
    setTaskTitle('');
    setCategory('');
    setAssignTo('');
    setTaskDate('');
    setTaskDescription('');
  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start bg-transparent justify-between w-full "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              required
              className="tex-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }} 
              required
              className="tex-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              required
              className="tex-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
              className="tex-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 w-full text-semibold rounded px-3 py-3">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask
