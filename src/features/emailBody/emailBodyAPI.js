import axios from "axios";

const fetchEmailBody = async (id) => {
    try {
        const response = await axios.get(
            `https://flipkart-email-mock.vercel.app/?id=${id}`
        );
        console.log("EmailBodyAPI", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchEmailBody;
