import React, { useRef, useEffect } from 'react'

interface CheckBoxProps {
    label?: string;
    status?: string;
    id:string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label = "", status = '', id='' }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = status === 'indeterminate';
        }
    }, [status]);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, id:string) => {
        
    }

    return (
        <div className='inputComponent'>
            <label>
                <input 
                  type='checkbox' 
                  ref={inputRef} 
                  checked={status === 'checked'}
                  onChange={(e) => handleInputChange(e, id)}
                />
                <span>{label}</span>
            </label>
        </div>
    )
}

export default CheckBox