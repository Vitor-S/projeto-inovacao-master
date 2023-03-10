import React, { useRef } from 'react'
import { TestWrapper } from './styles'

import Card from '../components/Card'

export default function Test() {

    const db = [
        {
            name: 'Vitor',
            city: 'Belo Horizonte',
            area: 'Varejo',
            supplier: 'false'
        },
        {
            name: 'Alex',
            city: 'Belo Horizonte',
            area: 'Atacado',
            supplier: 'true'
        },
        {
            name: 'Marcos',
            city: 'Santa Luzia',
            area: 'Bebidas',
            supplier: 'false'
        }
    ]

    return (
        <TestWrapper>
            {
                db.map(obj => <Card data={obj}/>)
            }
        </TestWrapper>
    )
}
