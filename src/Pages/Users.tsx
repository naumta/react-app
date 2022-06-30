import React, { useEffect, useMemo, useState } from 'react'
import { AddUser } from '../Components/Users/AddUser';
import { IUser } from '../Components/Users/IUser';
import { UserCards } from '../Components/Users/UserCards'
import { useSearch } from '../Hooks/UseSearch';
import http from '../http';

export const Users = () => {
    const [showUserForm, setShowUserForm] = useState(false);
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');
    const searchedUsers = useSearch(users, search);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        http.get(`users`).then(res => {
            setUsers(res.data);
        })
    }   
    
    //console.log(value);
    
    const deleteUser = (id: IUser["id"]) => {
        const isDelete = window.confirm("Really delete this user?");
        if(isDelete) {
            setUsers(users.filter((user) => user.id !== id));
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Users</h1>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input  type="text" 
                        className="form-control"
                        placeholder="Name"
                        onChange={(event) => setSearch(event.target.value)}    
            />
            </div>
        
        {/* <button type="button" className="btn btn-primary mb-4 mx-auto d-block" onClick={() => getUsers()}>Fetch user</button> */}
  
        <button type="button" className="btn btn-info mb-4 mx-auto d-block" onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
        {showUserForm && <AddUser users={users} setUsers={setUsers}/>}

        <UserCards users={searchedUsers} deleteUser={deleteUser}/>
        </div>
    )
}
