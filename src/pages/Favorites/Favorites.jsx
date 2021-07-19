import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../redux/favorites/favoritesActions";
import { addToCart } from "../../redux/cart/cartActions";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./Favorites.css";

function Favorites(props) {
    const totalSum = products => {
        return products.reduce((acc, product) => {
            return acc + product.price;
        }, 0);
    };

    return (
        <Layout>
            <div
                className="favorites-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
            >
                {props.products.length ? (
                    <div className="w-100">
                        <div className="d-flex justify-content-between text-center font-weight-bold">
                            <p className="w-25 title">Produs</p>
                            <p className="w-25 title">Preț</p>
                            <p className="w-25 title">Șterge</p>
                            <p className="w-25 title">Cumpără</p>
                        </div>
                        {props.products.map(product => {
                            return (
                                <div
                                    className="d-flex justify-content-between align-items-center text-center"
                                    key={product.id}
                                >
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs" />
                                        <p>{product.name}</p>
                                    </div>
                                    <p className="w-25">
                                        {product.price} {product.currency}
                                    </p>
                                    <div
                                        className="w-25"
                                        onClick={() =>
                                            props.removeFromFavorites({
                                                id: product.id
                                            })
                                        }
                                    >
                                        <Close />
                                    </div>
                                    <div className="w-25">
                                        <button
                                            className="btn btn-outline-dark"
                                            onClick={() => {
                                                props.addToCart({
                                                    product: {
                                                        id: product.id,
                                                        name: product.name,
                                                        price: product.price,
                                                        currency:
                                                            product.currency,
                                                        image: product.image
                                                    }
                                                });
                                            }}
                                        >
                                            Adaugă în coș
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="d-flex justify-content-end border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <p className="my-4 text-center font-weight-bold">
                                    Total de plată:{" "}
                                </p>
                            </div>
                            <div className="w-25">
                                <p className="my-4 text-center">
                                    {totalSum(props.products)}{" "}
                                    {props.products[0].currency}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex flex-column align-items-center">
                        <p className="h3 mb-3">Nu ai produse la favorite!</p>
                        <Link to="/">
                            <button className="btn btn-outline-dark">
                                Înapoi la Home
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: payload => dispatch(removeFromFavorites(payload)),
        addToCart: payload => dispatch(addToCart(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);