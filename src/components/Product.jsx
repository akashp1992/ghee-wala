import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { Circle, Container, Icon, Image, Info } from "../Theme/Product";
import StyledLink from '../Theme/StyledLink';
import Popup from "./Popup";

const Product = ({ item }) => {
  return (
    <Container >
      <Circle />
      <Popup/>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <StyledLink to={`/product/${item._id}`}>
          <SearchOutlined />
          </StyledLink>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
