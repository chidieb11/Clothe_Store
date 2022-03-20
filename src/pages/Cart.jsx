import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {mobile} from "../responsive";

const Container = styled.div`
`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  text-transform: capitalize;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  text-transform: uppercase;
  border: 1px solid teal;
  //background-color: whitesmoke;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 5px;
  outline: none;

  //&:hover {
  //  background-color: #008080;
  //  transition: .2s ease-in-out;
  //}
`

const TopTexts = styled.div`
  ${mobile({display: "none"})}
`

const TopText = styled.span`
  text-decoration: underline;
  margin: 0 20px;
  text-transform: capitalize;
  cursor: pointer;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  ${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
  border-radius: 5px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`

const ProductName = styled.span`
`

const ProductId = styled.span`
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span`
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  cursor: pointer;
`

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 10px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 50vh;
  padding: 20px;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-transform: capitalize;
`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  text-transform: capitalize;
`

const SummaryItemText = styled.span`
`

const SummaryItemPrice = styled.span`
`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: whitesmoke;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;

  //&:hover {
  //  background-color: #008080;
  //  transition: .3s ease-in-out;
  //}
`
const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>your bag</Title>
                {/* top */}
                <Top>
                    <TopButton>continue shopping</TopButton>
                    <TopTexts>
                        <TopText>shopping bag(2)</TopText>
                        <TopText>Your wishlists(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">checkout now</TopButton>
                </Top>
                {/*  bottom  */}
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src="https://images.unsplash.com/photo-1612724271076-24c0a3bade29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"/>
                                <Details>
                                    <ProductName>
                                        <b>Product: </b> Air Jordan
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b> 61864101
                                    </ProductId>
                                    <ProductColor color="red"/>
                                    <ProductSize>
                                        <b>Size: </b> 35.3
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>10</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $20
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src="https://images.unsplash.com/photo-1615420830426-a3484174cf1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                                <Details>
                                    <ProductName>
                                        <b>Product: </b> Air Jordan
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b> 81572579
                                    </ProductId>
                                    <ProductColor color="#5aa1bd"/>
                                    <ProductSize>
                                        <b>Size: </b> 29.99
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>15</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $25
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    {/*  Summary  */}
                    <Summary>
                        <SummaryTitle>order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>subtotal</SummaryItemText>
                            <SummaryItemPrice>$10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>estimated shipping cost</SummaryItemText>
                            <SummaryItemPrice>$5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>shipping discount</SummaryItemText>
                            <SummaryItemPrice>$0.5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">total</SummaryItemText>
                            <SummaryItemPrice>$15.5</SummaryItemPrice>
                        </SummaryItem>
                        <Button>checkout now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart;
