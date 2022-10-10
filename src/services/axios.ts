import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;

const Axios = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default Axios;
