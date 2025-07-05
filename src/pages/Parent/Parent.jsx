

import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import LoginPopup from '../../components/LoginPopup/LoginPopup'


const Parent = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <div>
      {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      
        <Navbar setShowLogin={setShowLogin} />


        <Outlet />
    </div>
  )
}

export default Parent