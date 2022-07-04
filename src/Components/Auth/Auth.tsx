import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context';
import http from '../../http';

export const Auth = () => {
    const {setIsAuth} = useContext(Context);

    const [username] = useState('mor_2314');
    const [password] = useState('83r5^_');

    const login = () => {
        http.post(`https://fakestoreapi.com/auth/login`, {username, password}).then(res => {
            if(res.status === 200) {
                setIsAuth(true);
            }
            //console.log(res);
        });
    };

    return (
        <>
        <div className="input-group flex-nowrap mb-4">
            <input type="text"
                    defaultValue={'mor_2314'}
                    className="form-control"
                    placeholder="Username" 
                    aria-label="Username"
            />
        </div>
        <div  className="input-group flex-nowrap mb-4">
            <input type="text" 
                    defaultValue={'83r5^_'}
                    className="form-control" 
                    placeholder="Password" 
                    aria-label="Password"
            />
        </div>
                
        <button className="btn btn-success" onClick={login}>Login</button>
    
    </>
    )
}
