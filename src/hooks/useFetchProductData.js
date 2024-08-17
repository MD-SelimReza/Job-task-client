import axios from "axios";
import { baseURL } from "../url/baseURL";

// Fetch products with pagination
const fetchProductData = async ({ queryKey }) => {
    const [, { page, limit, filters }] = queryKey;
    const { category, brand, priceRange, sortOrder, searchTerm } = filters;
    const { data } = await axios.get(`${baseURL}/products`,
        {
            params: {
                page,
                limit,
                category,
                brand,
                // priceRange,
                sortOrder,
                searchTerm,
            },
        }
    );
    console.log(data);
    return data;
};

export default fetchProductData;
