import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form 
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col items-center justify-center">
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-black bg-transparent outline-none border-2 border-emerald-600 py-3 px-6 font-medium rounded-full text-xl placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-black font-medium bg-transparent outline-none border-2 mt-3 border-emerald-600 py-3 px-6 rounded-full text-xl placeholder:text-gray-500"
            type="password"
            placeholder="Enter password"
          />
          <button className="text-white mt-5 outline-none font-semibold border-none border-emerald-600 py-2 px-6 w-full rounded-full text-xl bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
