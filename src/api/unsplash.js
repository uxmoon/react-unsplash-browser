import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID Pu1QS8uQszE3XOTYwOqbY6TVajlhU6HTXeqSMXTJ2W4",
  },
});