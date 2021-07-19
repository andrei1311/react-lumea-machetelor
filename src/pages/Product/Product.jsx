import React from "react";
import Layout from "../../components/Layout/Layout";
import products from "../../utils/products.json";
import "./Product.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import {
    addToFavorites,
    removeFromFavorites
} from "../../redux/favorites/favoritesActions";
import { ReactComponent as EmptyHeart } from "../../assets/icons/heart-outlined.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [...acc, ...category.items];
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({ product: currentProduct });
    }

    render() {
        const { product } = this.state;
        const { favoriteProducts } = this.props;

        const found = favoriteProducts.find(
            favoriteProduct => favoriteProduct.id === product.id
        );

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img
                                src={product.image}
                                alt="Product presentation"
                            />
                        </div>
                        <div className="product-details">
                            {!found ? (
                                <EmptyHeart
                                    className="heart empty-heart"
                                    onClick={() =>
                                        this.props.addToFavorites({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image
                                            }
                                        })
                                    }
                                />
                            ) : (
                                <Heart
                                    className="heart full-heart"
                                    onClick={() =>
                                        this.props.removeFromFavorites({
                                            id: product.id
                                        })
                                    }
                                />
                            )}
                            <p className="h3 text-danger">
                                {product.price} {product.currency}
                            </p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    });
                                }}
                            >
                                Adaugă în coș
                            </button>
                            {product.colour ? (
                                <p>
                                    <span className="font-weight-bold">
                                        Culoare
                                    </span>
                                    : {product.colour}
                                </p>
                            ) : null}
                            <p>
                                <span className="font-weight-bold">Brand</span>:{" "}
                                {product.brand}
                            </p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoriteProducts: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: payload => dispatch(addToCart(payload)),
        addToFavorites: payload => dispatch(addToFavorites(payload)),
        removeFromFavorites: payload => dispatch(removeFromFavorites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);