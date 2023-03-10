import React, { useEffect, useState } from 'react'
import { SearchWrapper } from './styles'
import { TextField, Button } from '@mui/material'

import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app } from '../service/firebaseConfig'
import Card from '../components/Card';

import Autocomplete from '@mui/material/Autocomplete';

const db = getFirestore(app)
const usersRef = collection(db, 'users')

export default function Search() {

    const [currentData, setCurrentData] = useState([])
    const [stateFilter, setStateFilter] = useState()
    const [supplierFilter, setSupplieFilter] = useState()
    
    useEffect(() => {
        FirebaseGet(usersRef, setCurrentData)
        // FirebaseGet(query(usersRef, where("state", "==", 'MG')), setStates)
    }, [])

    const FirebaseGet = async (query, setUseState) => {
        const querySnapshot = await getDocs(query);
        const result = []

        querySnapshot.forEach((doc) => {
          result.push(doc.data())
        });

        setUseState(result)
    }

    const handleFIlters = () => {
        const myFilters = 
        [stateFilter, supplierFilter].filters(obj => {
            
        })

        for(var obj in myFilters){
            for (const [key, value] of Object.entries(stateFilter)) {
                if (value) {
                    console.log(value);
                }   
            }
        }
    }
    }

    return (
        <SearchWrapper>
            <div className="input-container">
                <Autocomplete
                    title='state'
                    options={["MG", "SP"]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Estado" />}
                    onChange={(ev, value) => setStateFilter({'state': value})}
                    />

                <Autocomplete
                    name='supplier'
                    options={["Fornecedor", "Contratante"]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Tipo" />}
                    onChange={(ev, value) => setSupplieFilter({'supplier': value == 'Fornecedor' ? true : false})}
                    />
        
                    <input name='teste1' type="text" onChange={(ev) => console.log(ev)} />
                    {/* <input name='teste2' type="text" onChange={handleChangeFilters} /> */}

                <Button variant='outlined' color='success' onClick={handleFIlters}>Pesquisar</Button>
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