import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://media.istockphoto.com/photos/flat-lay-with-womans-clothes-and-accessories-picture-id1339264709?b=1&k=20&m=1339264709&s=170667a&w=0&h=qzBCqQvXpk-eLH8e72ZRaWRPuvWFwcUKZqGr1IsyTlE=") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 20%;
  padding: 30px;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.1);
  ${mobile({width: "75%"})}
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 200;
  font-size: 24px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  outline: none;
  border: 1px solid teal;
`

const Button = styled.button`
  width: 40%;
  margin-top: 10px;
  padding: 10px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>sign in</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>login</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
