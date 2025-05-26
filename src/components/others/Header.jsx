import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';
const Header = (props) => {
  // const [username, setUsername] = useState('');
  // if (!data) {
  //   setUsername('Admin');
  // } else {
  //   setUsername(data.firstName);
  // }
  
  const logOut = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br/> <span className='3xl font-semibold'>{props.user.role === 'admin' ? props.data[0].firstName : props.data.firstName}</span></h1>
      <button onClick={logOut} className='bg-red-600 text-white text-lg font-medium hover:bg-red-700 px-5 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
