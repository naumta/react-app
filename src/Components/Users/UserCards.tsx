import React, { ChangeEvent, FormEvent, useState } from 'react'
import { IUser } from './IUser';
import { USERS } from './users'

const initialValue: IUser ={
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
};

export const UserCards = () => {
    const [showUserForm, setShowUserForm] = useState(false);
    const [users, setUsers] = useState(USERS);
    const [value, setValue] = useState<IUser>(initialValue);
    //const [searched, setSearched] = useState([]);

    const onSearch = (event:ChangeEvent<HTMLInputElement>) => {
        setUsers(users.filter((user) => user.name.toLowerCase().includes(event.target.value.toLowerCase())));
    };
    
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
       const field = event.target.id;
       setValue({...value,[field]: event.target.value});
    };
    //console.log(value);

    const addUser = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUsers([ ...users, value]);
        setValue(initialValue);
    };

    return (
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" 
                className="form-control" 
                placeholder="name" 
                onChange = {(event) => onSearch(event)} 
            >
        </div>

    
        <button type="button" className="btn btn-info mb-4" onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
        {
            showUserForm && 
            <form className="col-3 mb-3" onSubmit={(event) => addUser(event)}>
                {Object.keys(initialValue).map(field => 
                <div className="mb-3" key={field}>
                    <label htmlFor={field} className="form-label">{field}</label>
                    <input  type="text" 
                            placeholder={`Input user ${field}`} 
                            className="form-control" 
                            id={field} 
                            value={value[field as keyof Omit <IUser, 'id' | 'address' | 'company'>]}
                            onChange = {(event) => onChange(event)}
                    />
                </div>
                )}
                <button type="submit" className="btn btn-primary">Save</button>
                
            </form>
        }

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {users.map(user => 
                    <div className="col" key={user.id}>
                        <div className="card h-100">
        
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">Address: {user.address?.city}, {user.address?.street}, {user.address?.suite}</p>
                                <p className="card-text"></p>
                                <p className="card-text">Email: {user.email}</p>
                                <p className="card-text">Phone: {user.phone}</p>
                                <p className="card-text">Website: {user.website}</p>
                                <p className="card-text">Company: {user.company?.name}</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-success mx-4">Edit user</button>
                                <button type="button" className="btn btn-info">Remove user</button>
                                
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
    </div>
    )
}
