import axios from 'axios';

// Use your environment variable or fallback to localhost
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
