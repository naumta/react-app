import React from 'react'
import http from '../../http';

export const Auth = () => {
    http.post(`https://fakestoreapi.com/auth/login`, {username:"mor_2314", password:"83r5^_"}).then(res => {
        console.log(res);
    });

    return (
        <button className="btn btn-success" onClick={Auth}>Login</button>
    )
}
