import React from 'react'
import { Navigate ,useNavigate } from 'react-router-dom'

type Props = {}

export default function Admin() {
  let navigate = useNavigate();


    const logined =  Boolean(localStorage.getItem("access_token"))
    if (logined) {
      <Navigate to= '/login' replace={true}/>
    }    
    return (
      <h1>{localStorage.getItem("access_token")}</h1>
      )
    
}