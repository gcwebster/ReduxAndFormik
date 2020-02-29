import React from 'react';
import './button.css';
import './filledButton.css';


function FilledButton(props) {
    const { text } = props;
    return (
        <button className="appButtonFilled">
            {text}
        </button>
    )
}

export default FilledButton;