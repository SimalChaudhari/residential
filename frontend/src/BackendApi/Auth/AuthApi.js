import axiosInstance from '../../Config/Config'; // Adjust the path if needed

/**
 * Register a new user by sending contact information.
 * @param {string} contact - The user's contact information (e.g., phone or email).
 * @returns {Object} - The response data from the backend.
 */
export const authRegister = async (contact) => {
    try {
        const response = await axiosInstance.post('/api/auth/register', contact);

        if (!response?.data?.success) {
            throw new Error(response?.data?.message || 'Registration failed.');
        }

        return {
            success: true,
            message: response.data.message || 'Registration successful!',
        };
    } catch (error) {
        const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during registration';
        console.error('Error during registration:', errorMessage);
        throw new Error(errorMessage); // Throwing meaningful error
    }
};

/**
 * Login a user by sending login credentials.
 * @param {Object} loginCredentials - The user's login credentials (e.g., contact and password/OTP).
 * @returns {Object} - The response containing user and token data.
 */
export const authLogin = async (loginCredentials) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', loginCredentials);

        // Validate response structure
        const token = response?.data?.access_token;
        const user = response?.data?.user;

        if (!token || !user) {
            throw new Error('Invalid response structure from the server');
        }

        return {
            success: true,
            user,
            token,
            message: response?.data?.message || 'Login successful!',
        };
    } catch (error) {
        const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during login';
        console.error('Error during login:', errorMessage);
        throw new Error(errorMessage); // Throwing meaningful error
    }
};
