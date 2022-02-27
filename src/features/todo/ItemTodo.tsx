import { Button, Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { Row } from 'antd';
import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { todoActions } from './todoSlice';

type Props = {id:any,title:string,completed:boolean,key:string}

export default function ItemTodo({id,title,completed}: Props) {
    const useStyles = makeStyles((theme) => ({

        form:{
        }
        ,button:{
            margin: theme.spacing(0,10)
        }

        
    }))
const dispatch = useAppDispatch();

    const handleChange = () => {
      dispatch(todoActions.changeStatus(id))

      };
      const handleDelete=()=>{
        dispatch(todoActions.delete(id))

      }
      const classes = useStyles()
  return (
      <Row>

    <FormControlLabel  className={classes.form}
    control={
        <Checkbox
        checked={completed}
        onChange={handleChange}
        name="checkedB"
        color="primary"
        />
    }
    label={title}
    ></FormControlLabel>
    <Button variant="contained" className={classes.button} size="small" onClick={handleDelete}>xóa</Button>
    </Row>
  )
}