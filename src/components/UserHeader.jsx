import React, { useState } from 'react'

import Avatar from '@mui/material/Avatar';
import { UserHeaderWrapper } from '../views/styles';

import { LogOut } from '../service/firebaseFunctions';
import { updateProfile } from 'firebase/auth';
import { Cap } from '../utils/functions'



export default function UserHeader({user}) {

  const [profileImg, setProfileImg] = useState(user.photoURL)

  return (
    <UserHeaderWrapper>
        <div className="uh-container">
            <span className='logout' onClick={LogOut}>Sair</span>
            <div className="user-container">
                <span className='user-name'>{Cap(user.displayName)}</span>
                <Avatar sx={{ bgcolor: '#2a228f' }}>
                    {user.displayName[0].toUpperCase()}
                </Avatar>
            </div>
        </div>
    </UserHeaderWrapper>
  )
}
