import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

//TODO ADD Publishibilng key
const stripepromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subheading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripepromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;