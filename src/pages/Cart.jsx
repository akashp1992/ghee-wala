import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductPrice, ProductSize, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from "../Theme/Cart";

const Cart = () => {
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
              <Product>
                <ProductDetail>
                  <Image src="https://cdn.shopify.com/s/files/1/2598/1404/products/64_1800x1800.jpg?v=1626214965" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> ACACIA FLOWER HONEY
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size:</b> 250 ml
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>1000 Rs</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://cdn.shopify.com/s/files/1/2598/1404/products/TBOF-Ecommerce0229_1800x1800.jpg?v=1626204235" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> BRAHMI GHEE, A2 CULTURED
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color="gray" />
                    <ProductSize>
                      <b>Size:</b> 500 ml
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>650 Rs</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>1650 Rs</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>50 Rs</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>0 Rs</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>1700 Rs</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  };
  
  export default Cart;