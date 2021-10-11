import React, { useState, useRef, useEffect } from 'react';

const product = {
    price: 1.00,
    description: 'fancy iphone, like new',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/1021px-IPhone_X_vector.svg.png',
};

const config = process.env;

const Product = () => {
    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${config.REACT_APP_CLIENT_ID}&currency=${config.REACT_APP_CURRENCY}`;
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);

        if (loaded) {
            setTimeout(() => {
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: product.description,
                                        amount: {
                                            currency_code: 'RUB',
                                            value: product.price
                                        }
                                    }
                                ]
                            });
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();
                            setPaidFor(true);
                            console.log(order);
                        }
                    }).render(paypalRef);
            });
        }

    });

    return <div className="product-container">
        <h2>Try script variant</h2>
        <div className="product">
            <img width="100" src={product.image} alt=""/>
            <div className="product-description-container">
                <h5 className="product-description-title">Fancy script iPhone</h5>
                <p className="product-description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, omnis!</p>
                { paidFor
                    ? <p>Congrats with your new iPhone</p>
                    : <div ref={value => (paypalRef = value)} /> }
            </div>
        </div>
    </div>;
};

export default Product;
