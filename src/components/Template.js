import React from "react";
import frame from "../assets/frame.png"
import Signupform from "./Signupform";
import Loginform from "./Loginform";
import {FcGoogle} from "react-icons/fc"

function Template({title,description1,description2,formtype,image,setlogin}) {
    return (
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
            <div className="w-11/12 max-w-[450px] -mt-2 text-md">
                <h1 className=" text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] ">{title}</h1>
                <p className=" text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100 ">{description1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{description2}</span>
                </p>
                {formtype === "signup" ? (<Signupform setlogin={setlogin} />) : (<Loginform setlogin={setlogin}/>)}
                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-richblack-700" ></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem">OR</p>
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                </div>
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-200 px-[12px] py-[8px] gap-x-4 mt-6">
                    <FcGoogle/>
                    <p>Sign Up With Google</p>
                </button>
            </div> 
            <div className="relative w-11/12 max-w-[450px]">
                <img src={frame} width={558} height={504} loading="lazy" />
                <img src={image} width={558} height={504} loading="lazy" className="absolute -top-4 right-4" />
            </div>
        </div>
    );
}

export default Template;