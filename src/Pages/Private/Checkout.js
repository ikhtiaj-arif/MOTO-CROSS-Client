import React, { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UserContext, { AuthContext } from "../../Context/UserContext";
import Spinner from "../../Components/Spinner";

const Checkout = ({ bikeInfo, bookingInfo }) => {
  const user = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardSuccess, setCardSuccess] = useState("");
  const [trId, setTrId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, _id: bookingId, productId } = bookingInfo;
  const {} = bikeInfo;

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://server-angon777.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        // console.log(data,"product:", bikeInfo);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log("[error]", error);
      setCardError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    setCardSuccess("");
    const { paymentIntent, error: confirmationError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });
    if (confirmationError) {
      setCardError(confirmationError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        bookingId: bookingId,
        transactionId: paymentIntent.id,
        email: user?.email,
        productId,
      };

      fetch("https://server-angon777.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("motocross-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            setCardSuccess("Payment Completed!");
            setTrId(paymentIntent.id);
          }
        });
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",

                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info btn-outline mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Make Payment
        </button>
      </form>
      <p className="text-red-600">{cardError}</p>
      {cardSuccess && (
        <div>
          <p className="text-green-500">{cardSuccess}</p>
          <p>
            Transaction ID: <span>{trId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Checkout;
