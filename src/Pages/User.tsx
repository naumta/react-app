import React from 'react'
import { useParams } from 'react-router-dom'
import http from '../http';

export const User = () => {
    const {id} = useParams();
    http.get(`users/${id}`).then(res => {
        console.log(res);
    })
    

    return (
        <div>
            
        </div>
    )
}
