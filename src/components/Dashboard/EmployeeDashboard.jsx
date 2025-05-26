import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'
const EmployeeDashboard = (props) => {
  const {userData, setUserData} = useContext(AuthContext);

  const loggedInEmployee = userData.find(emp => emp.firstName === props.data.firstName);
  
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} user={props.user}/>
      <TaskListNumbers data={loggedInEmployee} />
      <TaskList data={loggedInEmployee} />
    </div>
  );
}

export default EmployeeDashboard
