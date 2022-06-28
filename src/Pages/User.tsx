import React from 'react'
import { useParams } from 'react-router-dom'
import http from '../http';

export const User = () => {
    const {id} = useParams();

    const getUser = () => {
        http.get('users/id').then(res => {
            
        })
    }

    return (
        <div>
            
        </div>
    )
}
