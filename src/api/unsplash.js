import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b355dddc4d84050e92de4e671b11507d715a334b3924b77c279ee07c481b2e83"
  }
});
