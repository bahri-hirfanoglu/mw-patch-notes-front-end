import axios from "axios";

const API_URL = "http://localhost:6650/api";

class api {
  static async sendQuery(query, variables) {
    const headers = {
      "content-type": "application/json"
    };
    const graphqlQuery = {
      query,
      variables,
    };
    const response = await axios({
      url: API_URL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
    return response.data;
  }
}

export default api;
