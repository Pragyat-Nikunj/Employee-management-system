import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

function CreateEmployee() {
    const {userData, setUserData} = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const newEmployee = {
          id: Date.now(),
          firstName,
          email,
          password,
          tasks: [],
          taskStats: {
            active: 0,
            newTask: 0,
            completed: 0,
            failed: 0,
          },
        };
        const updatedUserData = [...userData, newEmployee];
        setUserData(updatedUserData);
        setFirstName("");
        setEmail("");
        setPassword("");
    }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#1c1c1c] flex-wrap">
      <h1 className="text-lg font-semibold text-gray-100 mb-10 bg-blue-600 px-2 py-3 rounded w-full flex justify-center">
        Create Employee Section
      </h1>
      <form
        className="bg-transparent flex flex-wrap flex-col"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label htmlFor="name" className="text-lg mb-2 text-gray-300">
          First Name
        </label>
        <input
          type="text"
          className="rounded-xl outline-none text-lg px-2 py-1 border-gray-400 border-2 mb-2"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
        }}
          required
        />
        <label htmlFor="email" className="text-lg mb-2 text-gray-300">
          Email
        </label>
        <input
          type="email"
          className="rounded-xl text-lg px-2 py-1 outline-none border-gray-400 border-2 mb-2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
        }}
          required
        />
        <label htmlFor="password" className="text-lg mb-2 text-gray-300">
          Password
        </label>
        <input
          type="password"
          className="rounded-xl text-lg px-2 py-1 outline-none border-gray-400 border-2 mb-2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
        }}
          required
        />
        <button className="bg-red-500 hover:bg-red-600 rounded-xl px-3 py-2 my-5">
            Add Employee
          </button> 
      </form>
    </div>
  );
}

export default CreateEmployee
