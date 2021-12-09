import React from "react";
import { Badge, Button } from "@material-ui/core";
import {useSelector} from 'react-redux';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
  Center,
  Container,
  Language,
  Left,
  Right,
  Wrapper,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "../Theme/Style";
import { Link, NavLink } from "react-router-dom";
import StyledLink from "../Theme/StyledLink";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity);
  // const notify = () => {
  //   toast("You are Not LoggedIn...");
  // };
  return (
    <Container>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GHEE-WALA</Logo>
        </Center>
        <Right>
          <StyledLink to="/register">
            <MenuItem>REGISTER</MenuItem>
          </StyledLink>
          <StyledLink to="/login" >
            <MenuItem >SIGN IN</MenuItem>
          </StyledLink>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
