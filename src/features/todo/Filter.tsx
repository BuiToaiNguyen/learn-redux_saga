import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box,Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Action } from 'history';
import { numberRadio, todoActions } from './todoSlice';
// import { useAppSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  h1:{
    padding: theme.spacing(2,1),
  },
  radioBox:{
    padding: theme.spacing(0,2)
  }
}))
export  function Filter() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
const [key,setKeyy]=useState()
  const handlechange=(id:number)=>{
    dispatch(todoActions.changeRadio(id))
  }

  const onChageSearch=(e:any)=>{
    setKeyy(e.target.value)
    dispatch(todoActions.setKey(e.target.value))
  }
  const number = useAppSelector(numberRadio);

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h1" component="h2" className={classes.h1} align="center" >
        App Todo
      </Typography>
      <Typography variant="h5" component="h3" className={classes.h1}  >
        Tìm kiếm
        </Typography>
       
          <TextField id="filled-basic"          
          placeholder="Tìm Kiếm"
          value={key}
          variant="filled" 
          fullWidth 
          onChange={onChageSearch}
          >
          </TextField>
            {/* <SearchIcon/> */}
        <Typography variant="h5" component="h3" className={classes.h1} >
          Filter
          </Typography>
          <Box className={classes.radioBox}>


          <RadioGroup row aria-label="position" name="position" defaultValue="top">

        <FormControlLabel
        onChange={()=>handlechange(1)}
        checked ={number==1?true:false }
          value="end1"
          control={<Radio color="primary" />}
          label="All"
          labelPlacement="end"
        />
   
        <FormControlLabel
          onChange={()=>handlechange(2)}
          checked ={number==2?true:false }

          value="end2"
          control={<Radio color="primary" />}
          label="Todo"
          labelPlacement="end"
        />
   
        <FormControlLabel
          onChange={()=>handlechange(3)}
          checked ={number==3?true:false }

          value="end3"
          
          control={<Radio color="primary" />}
          label="Completed"
          labelPlacement="end"
        />
   
      
      </RadioGroup>
      </Box>

    </React.Fragment>
  );
}
