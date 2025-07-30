import axios from 'axios';

const iterm = axios.create({
  baseURL: 'https://dummyjson.com/products/categories',
});


export const getIterm = async () => {
  try {
    const response = await iterm.get();
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
} 