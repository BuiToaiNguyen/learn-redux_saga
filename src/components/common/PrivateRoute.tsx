import React from 'react'
import { RouteProps, Route, Redirect   } from "react-router-dom";
import Admin from '../layout/Admin';


export  function PrivateRoute(props:RouteProps) {
    const logined =  Boolean(localStorage.getItem("access_token"))
    console.log(props)
    if (!logined) {

        return  <Redirect  to="/login"/>
    }
    // return <Route  to="/admin" ><Admin/></Route>

    


}