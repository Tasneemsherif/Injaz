import axios from "axios"
import * as SecureStore from "expo-secure-store"
//export const BASE_URL = "https://injaz-app-h61v.onrender.com/"
export const BASE_URL = "https://injaz.onrender.com/"


// http://localhost:1337/
//https://injaz.onrender.com/
const TIME_OUT = 30000
export const INJAZ_TOKEN_NAME = "injaz_user_token"
export const INJAZ_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJhZGUwMjUzYWZiN2EwNTQwNGE1ZTgiLCJpYXQiOjE2OTc2NDc0OTUsImV4cCI6MTY5ODI1MjI5NX0.1ZyVSMwM6rQWlOnV508hhZwbseixxxSDju1q9iJLk70"


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true, 
  headers: {
    'Authorization': `Bearer ${INJAZ_TOKEN}`,
    
  },

})


export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value)
    console.log(`Token saved successfully: ${key}`);

  } catch (error) {
    console.log("error in saveToken", error)
    throw error
  }
}

async function retrieveAndLogToken(key:string) {
  try {
    const token = await SecureStore.getItemAsync(key);
    if (token) {
      console.log(`Retrieved token from SecureStore: ${token}`);

    } else {
      console.log(`No token found in SecureStore for key: ${key}`);
    }
  } catch (error) {
    console.error(`Error in retrieving token for key ${key}`, error);
  }
}

//saveToken(INJAZ_TOKEN_NAME, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJhZGUwMjUzYWZiN2EwNTQwNGE1ZTgiLCJpYXQiOjE2OTc2NDc0OTUsImV4cCI6MTY5ODI1MjI5NX0.1ZyVSMwM6rQWlOnV508hhZwbseixxxSDju1q9iJLk70')
// Usage:
retrieveAndLogToken(INJAZ_TOKEN_NAME);

console.log('Before interceptor registration');



// axiosInstance.interceptors.request.use(async (req) => {
//   try {
//     const access_token = await SecureStore.getItemAsync(INJAZ_TOKEN_NAME)
//     console.log('Retrieved token from SecureStore:', access_token);
//     req.headers.Authorization = access_token;
    
//     return req
//   } catch (error) {
//     console.error('Error in token retrieval', error);
//     return req
//   }
// })
console.log('After interceptor registration');


export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data)

export default axiosInstance