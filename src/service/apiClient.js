import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:6066/api',
    httpsAgent: false,
    headers:{
        'Content-Type':'application/json'
    }
})

export const setAuthToken = (token)=>{

    if (token) {
        // Apply token to every request if logged in
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        // Delete auth header
        delete apiClient.defaults.headers.common['Authorization'];
      }
}

export default apiClient;