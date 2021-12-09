import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "../Theme/Login";

const Login = () => {
  const users = { username: "", password: "" };
  const [user, setUser] = useState(users);
  //const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFatching, isError } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, user);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <Input
            placeholder="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button onClick={handleClick} disabled={isFatching}>
            LOGIN
          </Button>
          { isError && <Error>Somthing Went Wrong</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
