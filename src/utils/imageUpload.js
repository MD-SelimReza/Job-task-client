import axios from "axios";

export const imageUpload = async file => {
    const formData = new FormData();
    formData.append("image", file);

    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
    );

    return (data.data.display_url);
}