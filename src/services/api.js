import axios from "axios";

const api = axios.create({
  baseUrl:
    "https://proxier.now.sh/http://node-express-scaleup.pzvdeedvjc.sa-east-1.elasticbeanstalk.com/"
});

export default api;
