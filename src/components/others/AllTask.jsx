import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const {userData, setUserData} = useContext(AuthContext);
  
  return (
    <div id="tasklist" className="bg-[#1c1c1c] p-4 mt-5 rounded h-auto">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="text-lg font-medium w-1/5">Emp. Name</h2>
        <h3 className="text-lg font-medium w-1/5">New</h3>
        <h5 className="text-lg font-medium w-1/5">Active</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="h-[80%]">
        {userData && userData.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="border-2 border-emerald-400 py-2 px-4 flex justify-between rounded mb-2"
              >
                <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
                <h3 className="text-lg font-medium w-1/5 text-blue-600">
                  {elem.taskStats.newTask}
                </h3>
                <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                  {elem.taskStats.active}
                </h5>
                <h5 className="text-lg font-medium w-1/5 text-green-600">
                  {elem.taskStats.completed}
                </h5>
                <h5 className="text-lg font-medium w-1/5 text-red-600">
                  {elem.taskStats.failed}
                </h5>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllTask
