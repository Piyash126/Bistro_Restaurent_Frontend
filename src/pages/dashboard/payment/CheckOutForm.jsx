import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';


const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })

            .then((res) => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        if (!stripe || !elements) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Payment Error', error);
            setError(error.message);
        }
        else {
            console.log('payment Method', paymentMethod);
            setError('');
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            '::placeholder': {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className='btn btn-primary btn-sx'>
                Pay
            </button>
            <p className='text-red-600'>{error}</p>
        </form>

    );
};

export default CheckOutForm;