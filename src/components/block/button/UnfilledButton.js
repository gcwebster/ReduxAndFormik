import React from 'react';
import './button.css';
import './unfilledButton.css';

function UnflledButton(props) {
    const { text } = props;
    return (
        <button className="appButtonUnfilled">
            {text}
        </button>
    )
}

export default UnflledButton;