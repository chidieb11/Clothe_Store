import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: whitesmoke;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  letter-spacing: 5px;
  opacity: 0.8;
  text-decoration: none;
`;

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  ${mobile({ fontSize: "10px" })}
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background: inherit;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
  text-transform: capitalize;
  ${mobile({ fontSize: "9px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={linkStyle}>
            <Logo>mini mart</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={linkStyle}>
            <MenuItem>register</MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
            <MenuItem>login</MenuItem>
          </Link>
          <Link to="/cart" style={linkStyle}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
