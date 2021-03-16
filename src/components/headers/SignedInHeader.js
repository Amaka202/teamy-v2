import React from 'react';
import {connect} from 'react-redux'
import logo from '../../img/Logo.png';
import {Link, useHistory} from 'react-router-dom';
import { Button } from 'rsuite';
import '../../styles/headers.css';
import {resetAuthState} from '../../store/actions/resetStateAction';
import {deleteToken} from '../helpers/token';
function SignedInHeader({resetAuthState}) {

    const history = useHistory();

    const redirectToLogin = () => {
        resetAuthState();
        deleteToken();
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

const mapDispatchToProps = (dispatch) => {
    return {
        resetAuthState: () => dispatch(resetAuthState())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignedInHeader);
  