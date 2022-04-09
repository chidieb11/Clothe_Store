import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://unisex-clothing-store.herokuapp.com/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjNiMTVmNTU2MjVhNjI2ZDBjMTc5MWIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDg2NzM5OTksImV4cCI6MTY0ODg0Njc5OX0.aSDjT5gmbCtmFWRAPqg3mwTR9LznDLdnzQDgMx5ouDg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  // headers: { token: `Bearer ${TOKEN}` },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
