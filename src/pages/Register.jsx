import React, { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch,useSelector } from "react-redux";
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Error
} from "../Theme/Register";

const Register = () => {
  const {isError}=useSelector((state)=>state.register);
  const dispatch=useDispatch();
  const [reg, setReg] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    conPass: "",
  });
 
  const handleClick=(e)=>{
    e.preventDefault();
    register(dispatch,reg);
  }

  const handleChange=(e)=>{
    setReg({
      ...reg,
      [e.target.name]:e.target.value
    })
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" name="name" onChange={handleChange} value={reg.name} />
          <Input placeholder="last name" name="lastname" onChange={handleChange} value={reg.lastname}/>
          <Input placeholder="username" name="username" onChange={handleChange} value={reg.username}/>
          <Input placeholder="email" name="email" onChange={handleChange} value={reg.email}/>
          <Input placeholder="password" name="password" onChange={handleChange} value={reg.password}/>
          <Input placeholder="confirm password" name="conPass" onChange={handleChange} value={reg.conPass}/>
          {isError && <Error>Something Went Wrong...</Error>}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
