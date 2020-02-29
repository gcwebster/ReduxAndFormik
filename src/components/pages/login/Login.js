import React from 'react';
import PageTitle from '../../block/pageTitle/PageTitle';
import Input from '../../block/input/Input';

function Login() {
    return (
        <>
            <PageTitle text="Log in" />
            <Input
                type="text"
                label="Email address"
                name="email"
                placeholder={'your@address.here'}
            />
        </>
    )
}

export default Login;