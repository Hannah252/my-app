import {useHistory} from "react-router-dom"
import React, { useState } from 'react';
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
        { username: 'user3', password: 'pass3' },
        { username: 'user4', password: 'pass4' },
        { username: 'user5', password: 'pass5' },
      ];
    const history = useHistory();
    const loginHandler = (e) =>{
        
        const userMatch = users.filter(user=>user.username === username && user.password === password);
        if (userMatch.length>0){
            alert("Login Successfull!!")
            history.replace('./list');
        }
        else{
            alert("Invalid Credential");
        }
    }

    return(
        <div className="box">
        <div className="container">
            <div className="head">
                <header>Login</header>
            </div>
            <div className="inputbox">
                <input type="text" className="input" id="uname" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/> 
                
            </div>
            <div className="inputbox">
                <input type="password" className="input" id ="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                
            </div><br />
            <div className="inputbox">
                <input type="submit" className="submit" onClick={loginHandler} />
            </div>
        </div>
        </div>
    );
}

export default Login;