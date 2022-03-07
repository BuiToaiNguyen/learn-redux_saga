import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import postApi from './api/postApi';
import todoApi from './api/todoApi';
import Login from './features/auth/pages/Login';
import { Route, Link,Switch, useHistory } from 'react-router-dom';
import Admin from './components/layout/Admin';
import { NotFound ,PrivateRoute} from './components/common';
import { Button} from '@material-ui/core';
import { useAppDispatch } from './app/hooks';
import { authAction } from './features/auth/pages/authSlice';
import { Row, Col } from 'antd';
import { todoActions } from './features/todo/todoSlice';

function App() {
const dispatch = useAppDispatch();
const history = useHistory();
    useEffect(()=>{
      

      todoApi.getAll({_limit:10}).then(response => dispatch(todoActions.setTodoJS(response)))

},[])
  return (
    <div >
      <Switch>
        <Route path='/login'> <Login/> </Route>
        <Route path='/admin' ><Admin/> </Route>

      </Switch>
      
 
         </div>

  );
}

export default App;
