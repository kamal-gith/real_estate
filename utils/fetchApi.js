import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '0c20df7b40msh266cdff3e605e4bp108d7fjsn9d47342549b4'
    }
  });
    
  return data;
}