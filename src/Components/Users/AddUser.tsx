import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import http from '../../http';
import { IUser } from './IUser';

export const AddUser = ({users, setUsers}: {users: IUser[], setUsers: Dispatch<SetStateAction<IUser[]>>}) => {
    const initialValue: IUser ={
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    };

    const [value, setValue] = useState<IUser>(initialValue);

    const addUser = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        http.post(`posts`, value).then(res => {
            setUsers([ ...users, res.data]);
            setValue(initialValue);
        })
    };

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        setValue({...value,[field]: event.target.value});
    };

    return (
        
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
        
    );
};
