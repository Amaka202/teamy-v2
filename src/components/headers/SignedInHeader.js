import React from 'react';
import logo from '../../img/Logo.png';
import {Link, useHistory} from 'react-router-dom';
import { Button } from 'rsuite';
import '../../styles/headers.css';

function SignedInHeader() {

    const history = useHistory();

    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className="header-container">
            <Link to='/'>
                <div className="logo-div">
                    <img src={logo} alt="app-logo"/>
                </div>
            </Link>
            <div className="homeheader-nav">
                <Button className="primary-btn" onClick={redirectToLogin}>LOG OUT</Button>
            </div>
        </div>
    )
}

export default SignedInHeader;
