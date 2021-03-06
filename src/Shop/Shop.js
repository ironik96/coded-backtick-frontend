import { observer } from 'mobx-react';
// import userStore from "../stores/userStore";
import coin from './../images/stack-coins.webp';
// import { Link } from "react-router-dom";
// import { useState } from "react";
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "3";
const currency = "USD";
const style = {
    layout: "horizontal",
    tagline: false,
    shape: "pill"
  };

function Shop() {
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                className=' text-green h-8 w-[70%] text-center '
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                onCancel={() => {
                  // Display cancel message, modal or redirect user to cancel page or back to cart
                  console.log("Canceled")
                }}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}
  // const user = userStore.user
  return (
 <main>
  <div className='flex justify-around m-10'>
  <div className='relative grid content-center w-10/12  rounded-[20px]'>
    <div className='w-full flex pt-5 justify-between'>
      <div className="flex" >
        <div className='pr-5'>
          <button className='border-b-2'>Shop</button>
        </div>
      </div>
    </div>
    {/* <h1>Buy BackTick Crypto</h1> */}
    <div className='flex justify-around w-auto mt-3 h-full rounded-[20px] bg-softgray'>
    <div className='w-full flex-wrap gap-1 relative  mt-4 flex justify-evenly '>
      {/* itme one  */}
      <div className='relative grid bg-white w-56 h-72 justify-items-center text-xs rounded-[10px]'>
      <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>10,000BT</h1>
      <h1 className='text-gray text-base w-[95%] text-center rounded-[10px]'>For $3</h1>
        <img alt='coins' className='pt-1 w-24 m-2 ' src={coin} />
        <PayPalScriptProvider options={{ "client-id": "test", components: "buttons", currency: "USD"}} >
          <div>
            <h1>Payment Method</h1>
          </div>
				<ButtonWrapper currency={currency} showSpinner={false} />
			  </PayPalScriptProvider>
      </div>
    </div>
  </div>
  </div>
  </div>
 </main>
  );
}

export default observer(Shop);
