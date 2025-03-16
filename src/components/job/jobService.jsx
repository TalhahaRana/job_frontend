import axios from "axios";

const API_URL = "https://jobbackend-8d8da728da7f.herokuapp.com/";

export const getJobs = async (filters) => {
  try {
    const params = new URLSearchParams(filters); // Convert filters to URL params
    const response = await axios.get(`${API_URL}?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

export const createJob = async (jobData) => {
  return await axios.post(API_URL, jobData);
};

export const updateJob = async (id, jobData) => {
  return await axios.put(`${API_URL}/${id}`, jobData);
};

export const deleteJob = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
