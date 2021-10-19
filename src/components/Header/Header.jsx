import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart.svg";
import { ReactComponent as EmptyHeart } from "../../assets/icons/heart-outlined.svg";
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/user/userActions";

function Header(props) {
    return (
        <header className="header border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Lumea machetelor" className="logo" />
                </Link>
                <div>
                    {props.user ? (
                        <p className="mt-2">Salut, {props.user.displayName}!</p>
                    ) : null}
                    <div className="d-flex justify-content-end">
                        {props.user ? (
                            <p
                                className="logout h5 text-decoration-none"
                                onClick={() => props.signOut()}
                            >
                                Delogare
                            </p>
                        ) : (
                            <Link to="/login" className="h5 mb-0">
                                Logare
                            </Link>
                        )}
                        <div className="d-flex align-items-center">
                            <Link to="/favorites" className="d-flex">
                                <EmptyHeart className="empty-heart ml-2" />
                                <p className="ml-1 mb-0">
                                    {props.numberOfFavorites}
                                </p>
                            </Link>

                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2" />
                                <p className="ml-1 mb-0">
                                    {props.numberOfProducts}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        numberOfFavorites: state.favorites.products.length,
        user: state.user.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
