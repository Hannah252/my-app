import {useHistory} from "react-router-dom"
import React, { useState } from 'react';
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const loginHandler = (e) =>{
        if (username === 'admin' && password === 'password'){
            history.push('./page')
        }
        else{
            alert('Invalid credentials!!')

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