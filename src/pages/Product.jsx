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
  FilterContainer,
  FilterTitle,
  FilterSize,
  Filter,
  FilterSizeOption,
  FilterColor,
} from "../Theme/ProductPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Annoucenment from "../components/Announcement";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRequest } from "../data/requestMethods";
import { addProduct } from "../redux/cartItem";
import styled from "styled-components";

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getProduct();
  }, []);

  
  const handleQuantity = (type) => {
    if (type === "desc") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        size,
      })
    );
  };
  return (
    <Container>
      <Navbar />
      <Annoucenment />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
              {product.size?.map((s) =>  (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

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
              <Remove onClick={() => handleQuantity("desc")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
