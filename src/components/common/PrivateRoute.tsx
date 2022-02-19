import React from 'react'
import { RouteProps,Navigate, Route   } from "react-router-dom";
import Admin from '../layout/Admin';


export  function PrivateRoute(props:RouteProps) {
    const logined =  Boolean(localStorage.getItem("access_token"))
    console.log(props)
    if (!logined) {

        return  <Navigate  to="/login"/>
    }
    return <Route  element={Admin} ></Route>

    

}