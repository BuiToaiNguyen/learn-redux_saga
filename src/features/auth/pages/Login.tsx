import { Box, Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import {authAction} from '../pages/authSlice'
import { selectIsLogged,selectIsLogging } from './authSlice';
import { useHistory} from 'react-router-dom';
import {uniqueid as uuid}  from "../../../utils/uuid"

const useStyle = makeStyles((theme) => ({

    root:{
      display: "flex",
      flexFlow:'row nowrap',
      justifyContent: "center",
      alignItems: "center",
      minHeight:'100vh',
      // backgroundColor: "#111"
    },
    box:{
      padding: "20px"
    }

}))
export default function Login() {
 const  classs=useStyle();
 const history = useHistory();

 const dispatch = useDispatch();
const handleLogin=()=>{
  dispatch(authAction.login({
    id:uuid(),
    userName:userName,
    password:passWord,
  }))
  history.push('/admin/todo')
}

const [userName,setUserName] = React.useState('')
const [passWord,setPassWord] =  React.useState('')
const [errUser,setErrUser] =  React.useState('')
const changeUser =(e:any)=>{
  setUserName(e.target.value )
  
  
}
const changePass =(e:any)=>{
  setPassWord(e.target.value)
}
console.log(userName)

  return (
    <div  className="  mx-auto mt-52 max-w-sm " > 
      
      <form className ="w-lg ">
      <h1 className="text-5xl text-slate-900 text-center">Đăng nhập</h1>
      <span className=" text-sm font-medium text-slate-700">Username</span>
      

<input type="text" onChange={changeUser}  value={userName} className="my-4  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    <label className="block text-red-600 my-4 ml-2 "   >{errUser}</label>
      <span className="mb-2 text-sm font-medium text-slate-700">PassWord</span>
      

<input type="text" value={passWord} onChange={changePass} className="  mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    <div className="flex justify-end ">

        <button type="button" className=" font-thin text-xl text-slate-900 p-2  mt-6 mr-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-blue-500 ">Log on</button>
        <button type="button" onClick={handleLogin  } className=" font-thin text-xl text-slate-900   p-2  mt-6 mr-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-blue-500 ">Log in</button>

    </div>
      </form>
        


    </div>
  )
}