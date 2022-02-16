import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import postApi from './api/postApi';
import todoApi from './api/todoApi';
import Login from './features/auth/pages/Login';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/layout/Admin';
import { NotFound } from './components/common';

function App() {


  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login/>} ></Route>

        <Route path='/admin'  element={<Admin/>}></Route>
        <Route path="" element={<NotFound/>}></Route>

      </Routes> 
      <div>helo</div>
         </div>

  );
}

export default App;
