import { Box,Button,TextField ,ButtonGroup, Input, makeStyles,Paper} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import React, { useRef } from "react";
import { useAppDispatch } from '../../app/hooks';
import { uniqueid } from "../../utils/uuid";
import { todoActions } from "./todoSlice";

export  function AddTodo() {
  const ref=useRef();
  const useStyles = makeStyles((theme) => ({
    root:{
      padding: theme.spacing(10,0)
    }
    ,row:{
      flexGrow: 1,

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button:{
    height:"100%"
    }
  }))
  const classes = useStyles();
  const [todo,setTodo]= React.useState('')
const dispatch = useAppDispatch()

 const handleClick =(event:any)=>{
     dispatch(todoActions.addTodo({id:uniqueid(),title:todo,completed:false}))


}
 const handleChange =(event:any)=>{
   setTodo(event.target.value);
  //  dispatch(todoActions.setTodo({id:uniqueid(),name:todo}))

}
  return (
    <Box className={classes.root}>


      <Grid container spacing={3}>

        <Grid  xs={10}>
      <TextField id="outlined-basic" label="Thêm todo" variant="outlined" fullWidth onChange={handleChange} value={todo} autoFocus />
        </Grid>
        <Grid  xs={2} >
      <Button color="secondary"  variant="contained" fullWidth className={classes.button} onClick={handleClick} >Thêm Todo</Button>
        </Grid>
        </Grid>


    </Box>

    );
}