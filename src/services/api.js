import axios from "axios";

const BASE_URL = "http://localhost:6650";

class api {
  static async sendQuery(query, variables) {
    const headers = {
      "content-type": "application/json",
    };
    const graphqlQuery = {
      query,
      variables,
    };
    const response = await axios({
      url: `${BASE_URL}/api`,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
    return response.data;
  }
  static async loginAdmin(variables) {
    return await axios.post(`${BASE_URL}/login`, variables);
  }
}

export default api;
