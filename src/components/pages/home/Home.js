import React from 'react';
import PageTitle from '../../block/pageTitle/PageTitle';
import FilledButton from '../../block/button/FilledButton';
import UnflledButton from '../../block/button/UnfilledButton';
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <PageTitle text="Home" />
            <p>Welcome to the future of social media!</p>
            <Link to="/login">
                <FilledButton text="log in" />
            </Link>
            <Link to="/register">
                <UnflledButton text="register" />
            </Link>
        </>
    );
}

export default Home;