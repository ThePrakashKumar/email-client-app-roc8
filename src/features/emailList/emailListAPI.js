import axios from "axios";

export const fetchEmail = async () => {
  try {
    const response = await axios.get(`https://flipkart-email-mock.now.sh/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
