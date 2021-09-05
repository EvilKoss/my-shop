import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://pc-store-6e7d3-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;