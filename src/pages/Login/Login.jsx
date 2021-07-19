import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import "./Login.css";
import { connect } from "react-redux";
import { loginGoogle, loginFacebook } from "../../redux/user/userActions";

class Login extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="login-page">
                <Link to="/">
                    <img src={Logo} alt="logo" className="mb-5" />
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center mb-3"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="mr-3" />
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => this.props.signInWithFacebook()}
                >
                    <Facebook className="facebook-logo mr-3" />
                    <span className="text-nowrap">Loghează-te cu Facebook</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(loginGoogle()),
        signInWithFacebook: () => dispatch(loginFacebook())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);