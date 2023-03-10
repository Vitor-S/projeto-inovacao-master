import React from 'react'

import { Link, useNavigate } from 'react-router-dom';

//STYLE IMPORTS
import { LoginWrapper } from './styles'
import bg from '../assets/register-bg.png'

//MUI IMPORTS
import { Button, TextField } from '@mui/material';

import { FirebaseLoginUser, LogOut } from '../service/firebaseFunctions';
import { getAuth } from 'firebase/auth';

//SUBMIT ERRORS MANAGER IMPORTS
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const auth = getAuth()

const validation = yup.object().shape({
  email: yup.string().required('Campo Obrigatório').email('Email inválido').lowercase(),
  password: yup.string().required('Campo Obrigatório').min(6, 'Mínimo 6 caracteres')
})

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  })

  const navigate = useNavigate()

  return (
    <LoginWrapper>
      <div className="form-wrapper">
        <div className="form-bg">
            <img src={bg} alt="" />
        </div>
        <div className="form-container">
          <form
            onSubmit={handleSubmit(data => FirebaseLoginUser(data.email, data.password, () => navigate('/')))}>

            <span>LOGIN</span>
            
            <div className="inputs-container">
              <TextField
                error={Boolean(errors.email)}
                label="Email"
                variant="outlined"
                {...register('email')}
                helperText={errors.email?.message} />

              <TextField
                error={Boolean(errors.password)}
                type='password'
                label="Senha"
                variant="outlined"
                {...register('password')}
                helperText={errors.password?.message} />
                

              <Button fullWidth style={{ height: '50px' }} type='submit' variant="contained" color="success">
                Entrar
              </Button>
            </div>

            <div>
              Crie já sua conta ! <Link to='/register'>Registre-se</Link>
            </div>
          </form>
        </div>
      </div>
    </LoginWrapper>
  )
}
