import { Box, Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import {authAction} from '../pages/authSlice'
import { selectIsLogged,selectIsLogging } from './authSlice';
import { useHistory} from 'react-router-dom';

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
    userName:"",
    password:"",
  }))
  history.push('/admin')
}
console.log(useAppSelector(selectIsLogged))
  return (
    <div className={classs.root}> 
      <Paper elevation={3}>
        <Typography variant='h5' component="h1" >
          Vui Lòng Đăng Nhập
        </Typography>
        <Box mt={2} className={classs.box}>
          <Button fullWidth variant='contained' color="primary"onClick={handleLogin} >
            Đăng Nhập
          </Button>
        </Box>


      </Paper>
{/* <h1>{selectIsLogged}</h1> */}
    </div>
  )
}