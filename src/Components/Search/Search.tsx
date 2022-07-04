import React from 'react'

export const Search = ({setSearch}: any) => {
    return (
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Search</span>
        <input  type="text" 
                className="form-control"
                placeholder="Name"
                onChange={(event) => setSearch(event.target.value)}    
        />
    </div>
    )
    }
