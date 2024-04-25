import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "77aa30eaf7f7406c9ee1718509d470f0",
  },
});
