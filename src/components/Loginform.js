import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Loginform(props) {
    let setlogin = props.setlogin;
    const navigate = useNavigate();

    const [formdata , setformdata] = useState({email:"" , password:""});
    const [checktype , setchecktype] = useState(false);

    function changehandler(e) {
        setformdata( (prev) => ({
            ...prev , [e.target.name]:e.target.value
        } ))
    }

    function submithandler(e) {
        e.preventDefault();
        setlogin(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return(
        <div >
            <form onSubmit={submithandler} className="flex flex-col w-full gap-y-4 mt-6">
                <label className="w-full ">
                    <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-2">Email Address <sup className="text-pink-200">*</sup></p>
                    <input required name="email" type="email" value={formdata.email} onChange={changehandler} placeholder="Your Email here..."
                        className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] focus:outline-blue-100"/>
                </label>
                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-2">Password <sup className="text-pink-200">*</sup></p>
                    <input required name="password" type={checktype ? ("text") : ("password")} value={formdata.password} onChange={changehandler} placeholder="Enter Your Password..."
                        className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px] focus:outline-blue-100 "/>
                    <span onClick={() => setchecktype((prev) => !prev)} className=" absolute top-[40px] right-3 cursor-pointer text-richblack-100 text-[28px]">
                        {checktype ? (<AiOutlineEyeInvisible  />) : (<AiOutlineEye/>)}
                    </span>
                    <Link to="#">
                        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto pt-1 pb-4">Forgot Password</p>
                    </Link>
                </label>
                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">Sign In</button>
            </form>
        </div>
    );
}

export default Loginform;