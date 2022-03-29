import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 20px;
`;

const Products = (cat, filters, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(cat, filters, sort);

  //Gets products from category item
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          // `http://localhost:5000/api/products`
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  //Sets filtered products
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      ;
    </Container>
  );
};

export default Products;
