import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import {Link, useNavigate } from "react-router-dom";

function Signupform({setlogin}) {
    const[formdata , setformdata] = useState({fstname:"",lstname:"",email:"",password:"",confirmpass:""});
    const [checktype , setchecktype] = useState(false);
    const [check2 , setcheck2] = useState(false);
    const [account , setstudent] = useState("student");
    const navigate = useNavigate();

    function changehandler(e) {
        setformdata( (prev) => ({
            ...prev , [e.target.name]:e.target.value
        } ))
    }

    function submithandler(e) {
        e.preventDefault();
        if(formdata.password !== formdata.confirmpass) {
            toast.error("Password Do Not Match");
            return;
        }
        setlogin(true);
        toast.success("Account Created");
        const finaldata = {
            ...formdata , account
        }
        console.log(finaldata);
        navigate("/dashboard");
    }

    function dhek() {
        setchecktype((prev) => !prev);
    } 

    return(
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
                <button onClick={() => setstudent("student")}
                    className={`${account === "student" ? ("bg-richblack-900 text-richblack-5" ) : (" bg-transparent text-richblack-200 ") } 
                    py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
                <button onClick={() => setstudent("instructor")}
                    className={`${account === "instructor" ? ("bg-richblack-900 text-richblack-5" ) : (" bg-transparent text-richblack-200 ") }
                    py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
            </div>
            <form onSubmit={submithandler}>
                <div className="flex gap-x-6 justify-between">
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-2">First Name<sup className="text-pink-200">*</sup></p>
                        <input required type="text" name="fstname" onChange={changehandler} value={formdata.fstname} placeholder="Enter First Name..."
                            className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] px-[17px] focus:outline-blue-100"/>
                    </label>
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-2">Last Name<sup className="text-pink-200">*</sup></p>
                        <input required type="text" name="lstname" onChange={changehandler} value={formdata.lstname} placeholder="Enter Last Name..."
                            className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] px-[17px] focus:outline-blue-100"/>
                    </label>
                </div>
                <div className="mt-2">
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-2">Email Address<sup className="text-pink-200">*</sup></p>
                        <input required type="email" name="email" onChange={changehandler} value={formdata.email} placeholder="Enter Your Email"
                            className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] focus:outline-blue-100"/>
                    </label>
                </div>
                <div className="flex gap-x-6 w-full justify-between mt-2">
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-2">Password <sup className="text-pink-200">*</sup></p>
                        <input required name="password" type={checktype ? ("text") : ("password")} value={formdata.password} onChange={changehandler} placeholder="Enter Your Password"
                            className=" bg-richblack-700 rounded-[0.5rem] px-[17px] text-richblack-5 w-full p-[12px] focus:outline-blue-100"/>
                        <span onClick={dhek} className=" absolute top-[41px] right-3 cursor-pointer text-richblack-100 text-[25px]">
                            {checktype ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                        <Link to="#">
                            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto pt-1 pb-4">Forgot Password</p>
                        </Link>
                    </label>
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-2">Confirm Password <sup className="text-pink-200">*</sup></p>
                        <input required name="confirmpass" type={check2 ? ("text") : ("password")} value={formdata.confirmpass} onChange={changehandler} placeholder="Confirm Password"
                            className=" bg-richblack-700 rounded-[0.5rem] px-[17px] text-richblack-5 w-full p-[12px] focus:outline-blue-100"/>
                        <span onClick={() => setcheck2((pre) => !pre)} className=" absolute top-[41px] right-3 cursor-pointer text-richblack-100 text-[25px]">
                            {check2 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                        <Link to="#">
                            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto pt-1 pb-4">Forgot Password</p>
                        </Link>
                    </label>
                </div>
                <button className="bg-yellow-50 rounded-[8px] w-full font-medium text-richblack-900 px-[12px] py-[8px]">Create Account</button>
            </form>
        </div>
    );
}

export default Signupform;