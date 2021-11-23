import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Info,
  Title,
} from "../Theme/CategoriesItems";

const CategoryItem = ({ items }) => {
  return (
    <Container>
        <Link to={`/products/${items.cat}`}>
      <Image src={items.img} />
      <Info>
        <Title>{items.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
