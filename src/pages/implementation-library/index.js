import React, { useCallback, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const product = {
    price: 3.00,
    description: 'fancy iphone, like new',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/1021px-IPhone_X_vector.svg.png',
};

const Product = () => {
    const [isPaid, setIsPaid] = useState(false);

    const createOrder = useCallback((data, actions) => {
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
    }, []);

    const onOrderApprove = useCallback(async (data, actions) => {
        const order = await actions.order.capture();
        setIsPaid(true);
        console.log(order);
    }, []);

    return <div className="product-container">
        <h2>Try library variant</h2>
        <div className="product">
            <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/1021px-IPhone_X_vector.svg.png" alt=""/>
            <div className="product-description-container">
                <h5 className="product-description-title">Fancy library iPhone</h5>
                <p className="product-description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, omnis!</p>
                { isPaid
                    ? <p>Congrats with your new iPhone</p>
                    : <PayPalButtons createOrder={createOrder} onApprove={onOrderApprove} /> }
            </div>
        </div>
    </div>;
};

export default Product;
