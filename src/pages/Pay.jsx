import React, {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import {useHistory} from "react-router-dom";

const KEY = "pk_test_51Kgo6MBd1hhjnUWazpifAFbks18prVdW14qkOmuMYNQ1kbsT3XvqACJzMTm5lr02lv3I0SWQltOUnIYHAd1SeJ8100zuTlzocF";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    // const history = useHistory()

    const onToken = (token) => {
        setStripeToken(token);
        console.log(token);
    }

    useEffect(() => {
        const makeRequestToBackend = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res.data)
                // history.push("/success");
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequestToBackend();

    }, [stripeToken]); // [stripeToken, history]); --> whenever we make use of the useHistory hook
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout
                    name="Mini Mart"
                    image="https://cdn.pixabay.com/photo/2022/02/28/04/50/nature-7038455__340.jpg"
                    billingAddress
                    shippingAddress
                    description="Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    );
};

export default Pay;
