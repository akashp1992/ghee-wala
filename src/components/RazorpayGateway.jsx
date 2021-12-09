import axios from "axios";
import React from "react";
import { publicRequest } from "../data/requestMethods";
import {Razorpay} from 'react-razorpay';

async function RazorpayGateway() {

  // const data=await publicRequest.post("/checkout/createOrder");
  //  const options = {
  //   "key": 'rzp_test_clL9tvTb07bZqL',
  //   currency: data.currency,
  //   amount:data.amount,
  //   name: "Akash prajapati",
  //   description: "Wallet Transaction",
  //   image: "http://localhost:5000/logo.png",
  //   order_id: data.id,
  //   handler:async function (response) {
  //     alert("PAYMENT ID ::" + response.razorpay_payment_id);
  //     // alert("PAYMENT ID ::" + response.razorpay_payment_id);
  //     // alert("ORDER ID :: " + response.id);
  //     // console.log(response);
  //     // const resData={
  //     //   orderCreationId:this.order_id,
  //     //   razorpayPaymentId:response.razorpay_payment_id,
  //     //   razorpayOrderId:response.razorpay_order_id,
  //     //   razorpaySignature:response.razorpay_signture,
  //     // };
  //     // const result=await publicRequest.post('/checkout/success',resData);
  //     // console.log(result.data.msg +"hello")
  //   },
  //   prefill: {
  //     name: "Akash Prajapati",
  //     email: "akash@gmail.com",
  //     contact: "9999999999",
  //   },
  // };
  // const paymentObject = new window.Razorpay(options);
  // paymentObject.open();
 
  const data = await publicRequest.get("/checkout/createOrder");
  console.log("res"+JSON.stringify(data));
  const  {amount,id:order_id,currency}=data;
  const __DEV__ = document.domain === "localhost";
  const options = {
    "key": 'rzp_test_clL9tvTb07bZqL',
    currency: currency,
    amount:"10000",
    name: "Akash prajapati",
    description: "Wallet Transaction",
    image: "http://localhost:5000/logo.png",
    order_id: order_id,
    handler:async function (response) {
      // alert("PAYMENT ID ::" + response.razorpay_payment_id);
      // alert("ORDER ID :: " + response.id);
      // console.log(response);
      const resData={
        orderCreationId:this.order_id,
        razorpayPaymentId:response.razorpay_payment_id,
        razorpayOrderId:response.razorpay_order_id,
        razorpaySignature:response.razorpay_signture,
      };
      const result=await publicRequest.post('/checkout/verify',resData);
      console.log(result.data.msg +"hello")
    },
    prefill: {
      name: "Akash Prajapati",
      email: "akash@gmail.com",
      contact: "9999999999",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();


}

export default RazorpayGateway;
