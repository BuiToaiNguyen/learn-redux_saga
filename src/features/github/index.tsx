import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

function TailWind({}: Props) {

  const [users, setUsers] =useState([])
  useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      setUsers(res.data)
    })
    .catch(error => console.log(error));
  },[])
  console.log(users)
  return (
    <div className="bg-purple-900  w-full flex justify-between">
      <div className="flex">
        <div className="ml-5 flex my-3">
          <img className="rounded-full w-12  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBxHQ_wAIN3a1STs4FJgOXUyIYA8oG_xafg&usqp=CAU" alt="ảnh nè" />
          <a className=" self-center ml-4 text-2xl font-medium text-white "  href="https://www.facebook.com/photo/?fbid=1140349619815176&set=a.286691588514321"> GitHub</a>

          
          
          </div>
        
        
      </div>

      <div className="flex items-center mr-6 ">
          <ul className="flex self-center	my-auto ">
            <li className="block mx-4 text-white font-semibold text-lg">home</li>
            <li className="block mx-4 text-white font-semibold text-lg">about</li>
            <li className="block mx-4 text-white font-semibold text-lg">trang chủ</li>
            
            </ul>        
        </div>
      
    </div>
  )
}

export default TailWind