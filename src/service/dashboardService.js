import apiClient from "./apiClient";

export const getCurrentStatus = async () => {
    const token = localStorage.getItem('jwtToken'); 
    console.log(token);
    const response = await apiClient.get('/dashboard/getCurrentStatus', { 
        headers: {
            'Authorization': `Bearer ${token}` // Include the token in the headers
        }
    });
    return response.data; // Return the data from the response
};
