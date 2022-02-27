
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { Filter } from './Filter';
import { AddTodo } from './addTodo';
import ItemTodo from './ItemTodo';
import { Container } from '@material-ui/core';
import { selectTodoList ,todoListByFilter} from './todoSlice';
import { useSelector } from 'react-redux';



export  function Todo() {
  const listTodo=useSelector(todoListByFilter);
  return (
    <React.Fragment>
      <Container maxWidth="xl">

      <Filter/>
      {listTodo.map((todo:any)=>(

      <ItemTodo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
      ))}
     
      <AddTodo/>
      </Container>
    </React.Fragment>
  );
}
