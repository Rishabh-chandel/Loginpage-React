import React from "react";
import loginImg from "../assets/login.png";
import Template from "../components/Template";

function Login({setlogin}) {
    return(
        <div>
            <Template
            title="Welcome Back"
            description1="Build skills for today, tomorrow, and beyond."
            description2="Education to future-proof your career."
            image={loginImg}
            formtype="login"
            setlogin={setlogin}/>
        </div>
    );
}

export default Login;