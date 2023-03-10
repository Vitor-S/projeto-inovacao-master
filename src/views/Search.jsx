import React, { useEffect, useState } from 'react'
import { SearchWrapper } from './styles'
import axios from 'axios';

import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app } from '../service/firebaseConfig'
import Card from '../components/Card';

import { TextField, Button } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';

const db = getFirestore(app)
const usersRef = collection(db, 'users')

export default function Search() {

    const [currentData, setCurrentData] = useState([])

    const [stateFilter, setStateFilter] = useState()
    const [supplierFilter, setSupplieFilter] = useState()

    const [cities, setCities] = useState()
    
    useEffect(() => {
        FirebaseGet(usersRef, setCurrentData)
    }, [])

    const FirebaseGet = async (query, setUseState) => {
        const querySnapshot = await getDocs(query);
        const result = []

        querySnapshot.forEach((doc) => {
          result.push(doc.data())
        });

        setUseState(result)
    }

    const handleFilters = () => {
        const filters = [stateFilter, supplierFilter].filter(obj => obj != undefined)

        const wheres = filters.map(obj => {
            return(
                where(Object.keys(obj)[0], '==', Object.values(obj)[0])
            )
        })

        FirebaseGet(query(collection(db, 'users'), ...wheres), setCurrentData)
    }

    return (
        <SearchWrapper>
            <div className="input-container">
                <Autocomplete
                    title='state'
                    options={["MG", "SP"]}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Estado" />}
                    onChange={(ev, value) => {
                        setStateFilter(value != null ? {'state': value} : undefined)

                        if(value != null){
                            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/distritos`)
                            .then((res) => {
                                const resList = []
                                res.data.forEach(obj => resList.push(obj.nome))
                                setCities(resList)
                            })
                        }
                    }}
                    />

                <Autocomplete
                    disabled={stateFilter == undefined}
                    name='city'
                    options={cities}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Cidade" />}
                    />

                <Autocomplete
                    name='area'
                    options={["area1", "area2"]}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Área" />}
                    />

                <Autocomplete
                    name='supplier'
                    options={["Fornecedor", "Contratante"]}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Tipo" />}
                    onChange={(ev, value) => 
                        setSupplieFilter(value == 'Fornecedor' ? {'supplier': true} :
                            value == 'Contratante' ? {'supplier': false} : undefined)}
                    />

                <Button 
                    style={{minWidth: '100px'}}
                    variant='outlined' 
                    color='success' 
                    onClick={() => console.log(cities)}>Pesquisar</Button>
            </div>
            <div className="cards-container">
                {
                    currentData.map(obj => <Card
                        key={obj.email} 
                        data={obj}/>)
                }
            </div>
        </SearchWrapper>
    )
}