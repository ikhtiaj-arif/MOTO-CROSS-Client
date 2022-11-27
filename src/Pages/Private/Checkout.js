import React, { useEffect, useState } from 'react';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js'
import UserContext, { AuthContext } from '../../Context/UserContext';

const Checkout = ({bikeInfo, bookingInfo}) => {
    const {user} = UserContext(AuthContext)
    const[ cardError, setCardError]= useState('')
    const[ success, setSuccess]= useState('')
    const[ loading, setLoading]= useState(false)
    const[ transactionId, setTransationId]= useState('')
    const stripe = useStripe()
    const elements = useElements()

    
    const {
       
        price,
        _id
      
      } = bikeInfo;

    const [clientSecret, setClientSecret] = useState("");

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json",
    //         authorization: `bearer ${localStorage.getItem('motocross-token')}`
    //     },
    //       body: JSON.stringify({price}),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setClientSecret(data.clientSecret));
    //   }, [price]);


    const handleSubmit = async(event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
          setLoading(true)
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            setCardError(error.message)
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
          setSuccess('')
          const {paymentIntent, error: confirmationError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                email: user?.email,
                },
              },
            },
          );
            if(confirmationError){
                setCardError(confirmationError.message)
                return
            }
           if(paymentIntent.status === 'succeeded'){
            
            
            // store payment data to database
           const payment = {
            price,
            transactionId: paymentIntent.id,
            email: user?.email,
            productId: _id

           }
            fetch("http://localhost:5000/payments",{
                method: "POST",
                headers: {
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem('motocross-token')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    setSuccess('Payment Successful!')
                    setTransationId(paymentIntent.id)
                    setLoading(false)
                }
            })



           }

    }
    return (
      <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret || loading}>
          Pay
        </button>
      </form>
      <p className='text-red-700'>{cardError}</p>
      {
        success && <div>
            <p className='text-green-600'>{success}</p>
            <p>Transaction Id: {transactionId}</p>
        </div>
      }
      </>
    );
};

export default Checkout;