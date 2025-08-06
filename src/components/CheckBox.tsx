import React from 'react'

const CheckBox = ({ label="" }) => {
    return (
        <div className='inputComponent'>
            <label>
                <input type='checkbox' />
                <span>{label}</span>
            </label>
        </div>
    )
}

export default CheckBox