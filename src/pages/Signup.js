import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png"

function Signup({setlogin}) {
    return(
        <div className="bg-richblack-900">
            <Template
            title="Join the millions learning to code with StudyNotion for free"
            description1="Build skills for today, tomorrow, and beyond."
            description2="Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setlogin={setlogin}/>
        </div>
    );
}

export default Signup;