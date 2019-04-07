import axios from "axios";

const api = axios.create({
  baseUrl:
    "http://node-express-scaleup.pzvdeedvjc.sa-east-1.elasticbeanstalk.com"
});

export default api;
