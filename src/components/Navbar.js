import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";

function Navbar(props) {
    let setlogin = props.setlogin;
    let islogin = props.islogin;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
            <Link to="/">
                <img src={Logo} width={160} height={32} loading="lazy" />
            </Link>
            <div className="flex gap-x-6 text-richblack-100 ">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/">About</Link>
                </div>
                <div>
                    <Link to="/">Contact</Link> 
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                { !islogin &&
                    <Link to="/login">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 " >Login</button>
                    </Link>
                }
                { !islogin &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 ">Sign Up</button>
                    </Link>
                }
                { islogin &&
                    <Link to="/">
                        <button onClick={() => {
                            setlogin(false);
                            toast.success("Logged Out");
                        }} className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 ">Log Out</button>
                    </Link>
                }
                { islogin &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100 ">Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar;