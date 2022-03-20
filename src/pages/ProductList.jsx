import React from 'react';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
`

const Title = styled.h3`
  margin: 20px;
  text-transform: capitalize;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({width: "0 20px", display: "flex", flexDirection: "column"})}
`

const FilterText = styled.h3`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  margin-bottom: 10px;
  ${mobile({marginRight: 0})}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #008080;
  cursor: pointer;
  ${mobile({margin: "10px 0"})}
`

const Option = styled.option`
  text-transform: capitalize;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            {/*<Title>dresses</Title>*/}
            <FilterContainer>
                <Filter>
                    <FilterText>filter products by:</FilterText>
                    <Select name="color">
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Yellow</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>Pink</Option>
                    </Select>
                    <Select name="size">
                        <Option disabled>size</Option>
                        <Option>XS</Option>
                        <Option>XL</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>sort products by:</FilterText>
                    <Select>
                        <Option>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (dsc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;
