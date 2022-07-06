import React, { FormEvent, useContext, useState } from 'react'
import { Context } from '../../Context/Context';
import http from '../../http';

export const Auth = () => {
    const {setIsAuth, setOpenModal} = useContext(Context);

    const [username] = useState('mor_2314');
    const [password] = useState('83r5^_');
    const JSON_URL = `https://fakestoreapi.com/auth/login`

    const login = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        http.post(JSON_URL, {username, password}).then(res => {
            localStorage.setItem('token', res.data.token)    
            setIsAuth(true);
            setOpenModal(false);
            
            //console.log(res);
        });
    };

    return (
    <form onSubmit={(event) => login(event)}>
        <div className="input-group flex-nowrap mb-4">
            <input type="text"
                    defaultValue={'mor_2314'}
                    className="form-control"
                    placeholder="Username" 
                    aria-label="Username"
            />
        </div>
        <div  className="input-group flex-nowrap mb-4">
            <input type="password" 
                    defaultValue={'83r5^_'}
                    className="form-control" 
                    placeholder="Password" 
                    aria-label="Password"
            />
        </div>
                
        <button className="btn btn-success" >Login</button>
    
    </form>
    )
}
