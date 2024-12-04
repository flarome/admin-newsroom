import axios from 'axios';

const API_BASE_URL = "/";



export const articlesFetch = async (variables) => {
  try {

    
    const response = await axios.post(`${API_BASE_URL}?_a=articlesFetch`, variables);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};




export const articleDetails = async (variables) => {
  try {
    const response = await axios.post(`${API_BASE_URL}?_a=articleDetails`, variables);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}; 

export const articleUpdate = async (variables) => {
  try {
    const response = await axios.post(`${API_BASE_URL}?_a=articleUpdate`, variables);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const authorAutocomplete = async (variables) => {
  try {
    const response = await axios.post(`${API_BASE_URL}?_a=authorAutocomplete`, variables);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const articleCreate = async (variables) => {
  try {
    const response = await axios.post(`${API_BASE_URL}?_a=articleCreate`, variables);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const adjacentArticle = async (variables) => {
  try {
    const response = await axios.post(`${API_BASE_URL}?_a=adjacentArticle`, variables);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};


export const articleDelete = async (variables) => {
  try {
    const response = await axios.post(`${API_BASE_URL}?_a=articleDelete`, variables);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};



