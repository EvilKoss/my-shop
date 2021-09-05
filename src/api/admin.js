import axios from "./axios";

export const createProduct = (category, description, name, urlImg, price) => {
  return axios.post("products.json", {
    category,
    description,
    name,
    price,
    urlImg,
  });
};
