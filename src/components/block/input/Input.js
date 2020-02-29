import React from 'react';

function Input(props) {
    const { type, label, name, placeholder } = props;
    return (
        <>
            <label for={name}>
                {label}
            </label>
            <input type={type} name={name} placeholder={placeholder} />
        </>
    )
}

export default Input;