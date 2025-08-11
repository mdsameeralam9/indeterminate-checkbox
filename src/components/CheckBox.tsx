import React, { useRef, useEffect } from 'react'

interface CheckBoxProps {
    label?: string;
    status?: string;
    id:string;
    updateCheckBoxState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label = "", status = '', updateCheckBoxState=()=>{} }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = status === 'indeterminate';
        }
    }, [status]);

    return (
        <div className='inputComponent'>
            <label>
                <input 
                  type='checkbox' 
                  ref={inputRef} 
                  checked={status === 'checked'}
                  onChange={updateCheckBoxState}
                />
                <span>{label}</span>
            </label>
        </div>
    )
}

export default CheckBox