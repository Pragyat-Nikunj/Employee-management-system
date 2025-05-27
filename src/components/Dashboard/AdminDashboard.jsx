import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import CreateEmployee from '../others/CreateEmployee';
const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} data={props.data} user={props.user}/>
      <CreateTask />
      <AllTask />
      <CreateEmployee />
    </div>
  );
}

export default AdminDashboard
