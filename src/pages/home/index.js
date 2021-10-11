import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div className="home-container">
        <h1 className="app-title">
            React paypal template
        </h1>
        <div className="links-row">
            <Link className="product-link" to="/script_implementation">
                <img
                    width="100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/1021px-IPhone_X_vector.svg.png" alt="buy iphone"
                />
                <h4 className="checkout-button">See product details</h4>
                <p className="product-description">Script inserting variant</p>
            </Link>
            <Link className="product-link" to="/library_implementation">
                <img
                    width="100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/1021px-IPhone_X_vector.svg.png" alt="buy iphone"
                />
                <h4 className="checkout-button">See product details</h4>
                <p className="product-description">Library use variant</p>
            </Link>
        </div>
    </div>;
};

export default Home;
