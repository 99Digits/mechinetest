import axios from "axios";




export const CommonRequest = async (method, url, body, header) => {
    let config = {
      method: method,
      url: url,
      data: body,
      headers: header
    };
    try {
      const response = await axios(config);
      return response.data;
    } catch (err) {
      return err;
    }
  };
  
