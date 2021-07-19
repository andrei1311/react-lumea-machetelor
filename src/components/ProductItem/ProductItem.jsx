import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import {
    addToFavorites,
    removeFromFavorites
} from "../../redux/favorites/favoritesActions";
import { Link } from "react-router-dom";
import { ReactComponent as EmptyHeart } from "../../assets/icons/heart-outlined.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

function ProductItem(props) {
    const { name, price, currency, image, id, favoriteProducts } = props;

    const found = favoriteProducts.find(
        favoriteProduct => favoriteProduct.id === id
    );

    return (
        <div className="product-item col-12 col-md-6 col-lg-4 mb-5 d-flex flex-column align-items-center">
            <div className="d-flex">
                <Link
                    to={`/product/${id}`}
                    className="d-flex flex-column align-items-center justify-content-center"
                >
                    <img src={image} alt="productPhoto" className="mb-2" />
                    <p className="mb-1 text-center">{name}</p>
                    <p className="text-center">
                        {price} {currency}
                    </p>
                </Link>

                {!found ? (
                    <EmptyHeart
                        className="empty-heart"
                        onClick={() =>
                            props.addToFavorites({
                                product: {
                                    id,
                                    name,
                                    price,
                                    currency,
                                    image
                                }
                            })
                        }
                    />
                ) : (
                    <Heart
                        className="full-heart"
                        onClick={() =>
                            props.removeFromFavorites({
                                id
                            })
                        }
                    />
                )}
            </div>
            <button
                className="btn btn-outline-dark mr-4"
                onClick={() =>
                    props.addToCart({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })
                }
            >
                Adaugă în coș
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        favoriteProducts: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: product => dispatch(addToCart(product)),
        addToFavorites: payload => dispatch(addToFavorites(payload)),
        removeFromFavorites: payload => dispatch(removeFromFavorites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);