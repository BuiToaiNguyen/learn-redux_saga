import React from 'react'
import { Switch, Route ,Redirect} from 'react-router-dom'
import { Row, Col } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Header from '../common/Header';
import SideBar from '../common/SideBar';
import {Main} from '../common/Main';
import Dashboard from '../../features/dashboard';
import {Todo} from '../../features/todo';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:'100vh',
    display:"grid",
    gridTemplateColumns:"240px 1fr",
    gridTemplateRows:"auto 1fr",
    gridTemplateAreas:`"header header" "sidebar main"`

  },
  header: {
    gridArea:"header",

    borderBottom:`1px solid ${theme.palette.divider}`

  },
  sidebar:{
    gridArea:'sidebar',
    borderRight:`1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,

  }
  ,
  main:{
    gridArea:'main',
    backgroundColor: theme.palette.background.paper,

  }
  ,

}));
type Props = {}

export default function Admin() {
  // let navigate = useNavigate();
  const classes = useStyles();


    const logined =  Boolean(localStorage.getItem("access_token"))
    if (!logined) {
      return <Redirect to= '/login' />
    }    
    return (
      <Box className={classes.root}>
        <Box className={classes.header}><Header/></Box>
        <Box className={classes.sidebar}><SideBar/></Box>
        <Box className={classes.main}>
        <Switch>
       <Route path='/admin/dashboard'> <Dashboard/></Route>
       <Route path='/admin/todo'> <Todo/> </Route>
        </Switch>
        </Box>

    </Box>
      
      )
    
}