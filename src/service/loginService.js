import apiClient from "./apiClient";

export const randomText = async () => {
    try{
        const response =await apiClient.get('/getRandomText');
        return response.data;   
    }
    catch(error){
        console.log(error);
    }
};

export const login = async (data)=>{
    try{
        const response = await apiClient.post('/prelogin/login',data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
};

