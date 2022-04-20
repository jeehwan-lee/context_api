import React, { useState, useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'

export default function Login() {

    const {setUsername, setShowProfile} = useContext(LoginContext);

  return (
    <div>
        <input type="text" placeholder='Username...' onChange={(e) => {setUsername(e.target.value)}}/>
        <input type="text" placeholder='Password...'/>
        <button onClick={() => {setShowProfile(true)}}>LOGIN</button>
    </div>
  )
}
