import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import postApi from './api/postApi';
import todoApi from './api/todoApi';
import Login from './features/auth/pages/Login';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Admin from './components/layout/Admin';
import { NotFound ,PrivateRoute} from './components/common';

function App() {


  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/admin' element={<Admin/>} ></Route>

      </Routes>

         </div>

  );
}

export default App;
