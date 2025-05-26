import { useContext, useState } from 'react'

import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

function App() {

  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    localStorage.setItem("loggedInUser", "");
  }
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const {userData, setUserData} = useContext(AuthContext);


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])
  // useEffect(() => {

  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
        
  //     }
  //   }
  // }, [authData])
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser({role:"admin"});
      localStorage.setItem('loggedInUser', JSON.stringify({role: "admin"}));
      setLoggedInUserData(JSON.parse(localStorage.getItem("admin")));
    } else if (userData)
     {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
      setUser({role:"employee"});
      setLoggedInUserData(employee);
      
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee}));
      }
    } else {
      alert("Invalid Credentials.");
    }
  }

  
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role == "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} user ={user}/>
      ) : user?.role == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} user={user}/>
      ) : null}
    </div>
  );
}

export default App;
