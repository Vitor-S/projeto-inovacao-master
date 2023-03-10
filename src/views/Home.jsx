import React, { useEffect, useState } from 'react'
import { HomeWrapper } from './styles'

import { auth } from '../service/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { LogOut } from '../service/firebaseFunctions'

import UserHeader from '../components/UserHeader'

import Search from './Search'

export default function Home() {
  
  const navigate = useNavigate()

  const [userLogged, setUserLogged] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate('/login')
      else setUserLogged(user)
    });
  }, [])

  return (
  <HomeWrapper>
    <div className="container">
      <div className="sidebar-container">
        {
          typeof userLogged != 'undefined' && <UserHeader user={userLogged} />
        }
      </div>
      <div className="search-container">
        <Search />
      </div>
    </div>
  </HomeWrapper>
  )
}
