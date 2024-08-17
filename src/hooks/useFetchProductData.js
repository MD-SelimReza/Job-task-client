import axios from "axios";
import { baseURL } from "../url/baseURL";

// Fetch products with pagination
const fetchProductData = async ({ queryKey }) => {
    const [, { page = 1, limit = 10 }] = queryKey;
    console.log(page, limit);
    const response = await axios.get(`${baseURL}/products`, {
        params: { page, limit },
    });
    return response.data;
};

export default fetchProductData;
