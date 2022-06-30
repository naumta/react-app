import React, { Dispatch, SetStateAction } from 'react'

export const Modal = ({}: {openModal: boolean, setOpenModal:Dispatch<SetStateAction<boolean>>}) => {
    return (
    <div className="modal ${openModal && 'd-block'}">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close">
                        onClick    
                </button>
            </div>
            <div className="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
    )
}
