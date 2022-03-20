import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://media.istockphoto.com/photos/exterior-of-clothing-store-with-shoes-and-other-accessories-in-picture-id1311106995?b=1&k=20&m=1311106995&s=170667a&w=0&h=hIQ5mjn2SvxKX2na0_hokhW9QDLCjGA5xOil99LiScU=") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  outline: none;
  border: 1px solid teal;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
  padding: 10px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`

const
    Register = () => {
        return (
            <Container>
                <Wrapper>
                    <Title>create an account</Title>
                    <Form>
                        <Input placeholder="name"/>
                        <Input placeholder="last name"/>
                        <Input placeholder="username"/>
                        <Input placeholder="email"/>
                        <Input placeholder="password"/>
                        <Input placeholder="confirm password"/>
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>create</Button>
                    </Form>
                </Wrapper>
            </Container>
        );
    };

export default Register;
