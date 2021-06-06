import { useState } from 'react';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(undefined)
    const getUser = () => {
      fetch("http://127.0.0.1:5000/getUser?netid=" + sessionStorage.getItem("email"))
      .then(response => response.json())
      .then(data => {
        setUserInfo(data)
       })
    }
    getUser()
    return(
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  
}

export default Dashboard;
