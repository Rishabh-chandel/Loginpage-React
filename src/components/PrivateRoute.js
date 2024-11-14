import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({islogin,children}) {
    if(islogin) {
        return children;
    }
    else {
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute;