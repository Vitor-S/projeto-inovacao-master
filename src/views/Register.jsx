import React from 'react'
import { RegWrapper } from './styles'
import { Link, useNavigate } from 'react-router-dom'

import { TextField, Button, InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material'

import { firebaseCreateUser } from '../service/firebaseFunctions'

//SUBMIT ERRORS MANAGER IMPORTS
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validation = yup.object().shape({
  name: yup.string().required('Campo Obrigatório').min(3, 'Mínimo 3 letras').max(20, 'Máximo 20 letras'),
  surname: yup.string().required('Campo Obrigatório').min(3, 'Mínimo 3 letras').max(20, 'Máximo 20 letras'),
  email: yup.string().required('Campo Obrigatório').email('Email inválido').lowercase(),
  password: yup.string().required('Campo Obrigatório').min(6, 'Mínimo 6 caracteres'),
  check_password: yup.string().required('Campo Obrigatório').oneOf([yup.ref('password'), null], 'As senhas são diferentes'),
  supplier: yup.string().required('Campo Obrigatório'),
  area: yup.string().required('Campo Obrigatório'),
  state: yup.string().required('Campo Obrigatório'),
  cep: yup.string().required('Campo Obrigatório'),
  phone: yup.string().required('Campo Obrigatório'),
})

const states = [
  { uf: 'AC', nome: 'Acre' },
  { uf: 'AL', nome: 'Alagoas' },
  { uf: 'AP', nome: 'Amapá' },
  { uf: 'AM', nome: 'Amazonas' },
  { uf: 'BA', nome: 'Bahia' },
  { uf: 'CE', nome: 'Ceará' },
  { uf: 'DF', nome: 'Distrito Federal' },
  { uf: 'ES', nome: 'Espirito Santo' },
  { uf: 'GO', nome: 'Goiás' },
  { uf: 'MA', nome: 'Maranhão' },
  { uf: 'MS', nome: 'Mato Grosso do Sul' },
  { uf: 'MT', nome: 'Mato Grosso' },
  { uf: 'MG', nome: 'Minas Gerais' },
  { uf: 'PA', nome: 'Pará' },
  { uf: 'PB', nome: 'Paraíba' },
  { uf: 'PR', nome: 'Paraná' },
  { uf: 'PE', nome: 'Pernambuco' },
  { uf: 'PI', nome: 'Piauí' },
  { uf: 'RJ', nome: 'Rio de Janeiro' },
  { uf: 'RN', nome: 'Rio Grande do Norte' },
  { uf: 'RS', nome: 'Rio Grande do Sul' },
  { uf: 'RO', nome: 'Rondônia' },
  { uf: 'RR', nome: 'Roraima' },
  { uf: 'SC', nome: 'Santa Catarina' },
  { uf: 'SP', nome: 'São Paulo' },
  { uf: 'SE', nome: 'Sergipe' },
  { uf: 'TO', nome: 'Tocantins' }
]

export default function Register() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  })

  return (
    <RegWrapper>
      <div className="container">
        <form onSubmit={handleSubmit((data) => {
          firebaseCreateUser(data, () => navigate('/login'))
          // console.log(data)
        })}>
          <div className="title span-2">REGISTER</div>
          <div className="left-inputs input-container">
            <TextField fullWidth
                  error={Boolean(errors.name)}
                  label="Nome"
                  variant="outlined"
                  {...register('name')}
                  helperText={errors.name?.message} 
                  />
            <TextField fullWidth
                  error={Boolean(errors.surname)}
                  label="Sobrenome"
                  variant="outlined"
                  {...register('surname')}
                  helperText={errors.surname?.message} 
                  />
            <TextField fullWidth
                  error={Boolean(errors.email)}
                  label="Email"
                  variant="outlined"
                  {...register('email')}
                  helperText={errors.email?.message} 
                  />
            <TextField fullWidth
                  error={Boolean(errors.password)}
                  type='password'
                  label="Senha"
                  variant="outlined"
                  {...register('password')}
                  helperText={errors.password?.message} 
                  />
            <TextField fullWidth
                  error={Boolean(errors.check_password)}
                  type='password'
                  label="Confirmar Senha"
                  variant="outlined"
                  {...register('check_password')}
                  helperText={errors.check_password?.message} 
                  />
          </div>
          <div className="right-inputs input-container">
            <FormControl fullWidth error={Boolean(errors.supplier)} >
              <InputLabel id="demo-simple-select-label">Tipo de usuário</InputLabel>
              <Select {...register('supplier')}
                label="type supplier"
              >
                <MenuItem value={Boolean(true)}>Fornecedor</MenuItem>
                <MenuItem value={Boolean(false)}>Contratante</MenuItem>
              </Select>
              <FormHelperText>{errors.supplier?.message}</FormHelperText>
            </FormControl>

            <TextField fullWidth
                  error={Boolean(errors.area)}
                  label="Área de atuação"
                  variant="outlined"
                  {...register('area')}
                  helperText={errors.area?.message} 
                  />

            <FormControl fullWidth error={Boolean(errors.state)} >
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select {...register('state')}
                label="state"
              >
                {
                  states.map((state) => {
                    return (<MenuItem
                      key={state.uf}
                      value={state.uf}>{state.nome}</MenuItem>)
                  })
                }
              </Select>
              <FormHelperText>{errors.state?.message}</FormHelperText>
            </FormControl>

            <TextField fullWidth
                  error={Boolean(errors.cep)}
                  label="CEP"
                  variant="outlined"
                  {...register('cep')}
                  helperText={errors.cep?.message} 
                  />

            <TextField fullWidth
                  error={Boolean(errors.phone)}
                  label="Celular"
                  variant="outlined"
                  {...register('phone')}
                  helperText={errors.phone?.message} 
                  />
          </div>
          <div className="buttons-container span-2" style={{gap: '13px'}}>
            <Button type='submit' variant="contained" color="success" style={{width: '80%', height: '50px'}}>
              registrar
            </Button>
            <div style={{textAlign: 'center'}}>
              Já possuí uma conta ? <Link to='/login'>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </RegWrapper>
  )
}
