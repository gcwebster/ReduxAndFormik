import React from 'react';
import './pageTitle.css'

function PageTitle(props) {
    const { text } = props;
    return (
        <>
            <h1 className="pageTitle">{text}</h1>
            <div className="pageTitleBlock" />
        </>
    )
}

export default PageTitle;