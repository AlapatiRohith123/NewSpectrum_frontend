import React from "react";
import "./../files/sign.css";
import hamburger from "./../files/hamburger.jpg";
import { fun1,fun2,fun3,fun4,fun5,fun6 } from "../files/signup";
import { useNavigate } from "react-router-dom";
function Sign_up(){
    const nav=useNavigate();
    const fun7=()=>{
        nav("Login");
    }
    return (
        <div className="container-fluid">
            <div id="content">
                <h1>Sign up</h1>
                <input type="text" placeholder="Full Name" className="input1"/>
                <input type="email" placeholder="Email" className="input1"/>
                <input type="text" placeholder="Username" className="input1"/>
                <div className="password">
                    <button id="button" onClick={fun5}>Show</button>
                    <input type="password" placeholder="Password" className="input1" onInput={fun6}/>
                </div>
                <p>Gender:</p>
                <span className="radio">
                    <label htmlFor="gender1">Male</label>
                    <input type="radio" className="gender1" onClick={fun1}/>
                </span>
                <span className="radio">
                    <label htmlFor="gender2">Female</label>
                    <input type="radio" className="gender2" onClick={fun2}/>
                </span>
                <p>Occupation:</p>
                <span className="radio">
                    <label htmlFor="student">Student</label>
                    <input type="radio" className="student" onClick={fun3}/>
                </span>
                <span className="radio">
                    <label htmlFor="entrepreneur">Entrepreneur</label>
                    <input type="radio" className="entrepreneur" onClick={fun4}/>
                </span>
                <button className="sign_up" onClick={fun7}>Sign Up</button>
                <hr/>
                <p>Have an account? <a href="Login">Log in</a></p>
            </div>
        </div>
        )
    }
    export default Sign_up;