import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ borderRadius: "5px", height: "70vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: gray;
  cursor: pointer;
  font-weight: 500;
`;

const Title = styled.h3`
  color: whitesmoke;
  letter-spacing: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
