import React from 'react';

const product = {
    price: 1.00,
    description: 'fancy iphone, like new',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/1021px-IPhone_X_vector.svg.png',
};

const Product = () => {

    return <div className="product-container">
        <h2>Try library variant</h2>
        <div className="product">
            <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/1021px-IPhone_X_vector.svg.png" alt=""/>
            <div className="product-description-container">
                <h5 className="product-description-title">Fancy library iPhone</h5>
                <p className="product-description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, omnis!</p>
            </div>
        </div>
    </div>;
};

export default Product;
