import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Bottom,
  Button,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from "../Theme/Cart";
import { publicRequest, userRequest } from "../data/requestMethods";
import payNow from '../components/RazorpayGateway'; 
const KEY=process.env.STRIP_KEY;
const Cart = () => {
 
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/razorpay", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       navigate("/success", {
  //         stripData: res.data,
  //         products: cart,
  //       });
  //     } catch (e) {
  //       console.log("Stripe cart " + e);
  //     }
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart.total, navigate]);
//   const [value,setValue]=useState({
//     amount:0,
//     orderId:"",
//     error:"",
//     success:false
//   })

//   const {amount,orderId,success,error}=value;
//   useEffect(()=>{
//       createOrder();
//   },[]);

// const createOrder=()=>{
//   const res=publicRequest.get("/checkout/createOrder",{

//   });
//   if(res.error){
//     setValue({...value,error:res.error,success:false});
//   }else{
//     setValue({
//       ...value,
//       error:"",
//       success:true,
//       orderId:res.id,
//       amount:res.amount
//     })
//   }
// }

// useEffect(()=>{
//   if(amount>0 && orderId !=""){
//     showRazorPay();
//   }
// },[amount]);

// const showRazorPay=()=>{
//   const form=document.createElement("form");
//   form.setAttribute("action","/payment/callback");
//   form.setAttribute("method","POST");
//   const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.setAttribute("data-key", "rzp_test_clL9tvTb07bZqL");
//     script.setAttribute("data-amount", amount);
//     script.setAttribute("data-name", "Clever Coder");
//     script.setAttribute("data-prefill.contact", "9678452132");
//     script.setAttribute("data-prefill.email", "abc@gmail.com");
//     script.setAttribute("data-order_id", orderId);
//     script.setAttribute("data-prefill.name", "Lalit Patel");
//     script.setAttribute("data-image", "");
//     script.setAttribute("data-buttontext", "Buy NOW!!!");
//     document.body.appendChild(form);
//     form.appendChild(script);
//     const input = document.createElement("input");
//     input.type = "hidden";
//     input.custom = "Hidden Element";
//     input.name = "hidden";
//     form.appendChild(input);
// }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((products) => (
              <Product>
                <ProductDetail>
                  <Image src={products.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {products.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {products._id}
                    </ProductId>
                    <ProductSize>
                      <b>Size:</b>
                      {products.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{products.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    &#8377; {products.price * products.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>&#8377; {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>&#8377; 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>&#8377; 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>&#8377; {cart.total}</SummaryItemPrice>
              {/* {amount === 0 && orderId==="" && <h1>Loding...</h1>} */}
            </SummaryItem>
            {/* <StripeCheckout
              name="Ghee Wala"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is &#8377;${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout> */}
            <Button onClick={payNow}>CHECKOUT NOW</Button>
            
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
