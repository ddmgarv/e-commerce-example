import React from 'react';
import './formInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='formInput'>
        <input className='formInput--input' onChange={handleChange} {...otherProps} />
        {label && (
            <label className={`${otherProps.value.length ? 'shrink' : ''} formInput--label`}>
                {label}
            </label>
        )}
    </div>
);

export default FormInput;
