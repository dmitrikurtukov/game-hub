import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "7e00befec1e74b3892c1264d599fdf4c" },
});
