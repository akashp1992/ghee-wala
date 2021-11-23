import {
  AddContainer,
  Container,
  Amount,
  AmountContainer,
  Button,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "../Theme/ProductPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Annoucenment from "../components/Announcement";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annoucenment />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/2598/1404/products/22_1800x1800.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>A2 CULTURED GHEE, DESI GIR COW</Title>
          <Desc>
            A2 Gir Cow Cultured Ghee is made using fresh Gir cow milk. The milk
            is brought to a boil and naturally cooled down to room temperature
            and inoculated with a natural starter culture and left overnight to
            make yoghurt. The yoghurt is churned during pre-dawn hours (4 am - 6
            am) to separate raw white butter using the ancient process of
            'Bilona' - clockwise-anticlockwise slow churning
          </Desc>
          <Price>200 Rs</Price>
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
