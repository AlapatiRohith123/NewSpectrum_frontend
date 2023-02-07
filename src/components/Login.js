import React from "react";
import "./../files/sign.css";
const fun1=()=>
{
    var password=document.getElementsByClassName("input2")[1];
    var button=document.getElementById("button");
    if(button.innerHTML=="Show")
    {
        password.type="text";
        button.innerHTML="Hide";
    }
    else
    {
        password.type="password";
        button.innerHTML="Show";
    }
}
const fun2=()=>
{
    var password=document.getElementsByClassName("input2")[1];
    var button=document.getElementById("button");
    if(password.value.length!=0)
    {
        button.style.display="inline-block";
    }
    else
    {
        button.style.display="none";
    }
}
function Login(){
    return (
        <div className="container-fluid">
            <div id="content" style={{marginTop: "10%"}}>
                <h1>Login</h1>
                <input type="text" placeholder="Email or username" className="input2"/>
                <div className="password">
                    <button id="button" onClick={fun1}>Show</button>
                    <input type="password" placeholder="Password" className="input2" onInput={fun2}/>
                </div>
                <button className="log_in"><a href="Login_as" style={{textDecoration: "none", color: "black"}}>Log in</a></button>
                <a href="#not">Forgot password?</a>
                <hr/>
                <p>Don't have an account? <a href="/">Sign up</a></p>
            </div>
        </div>
    )
}
export default Login;