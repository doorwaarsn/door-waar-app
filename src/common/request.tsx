import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../env";

export const postRequest = async (path: string, body: any) => {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "post",
    url: `${API_URL}/${path}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: body,
  };
  const request = await axios.request(config);

  return request.data;
};

export const putRequest = async (path: string, body?: any) => {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "put",
    url: `${API_URL}/${path}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    data: body,
  };
  const request = await axios.request(config);
  return request.data;
};

export const fetchRequest = async (path: string) => {
  try {

    const response = await axios.get(`${API_URL}/${path}`, {
      headers: {
        "Content-Type": "application/json",

      },
    });

    if (!response) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    console.error("Erreur de requête API:", error);
    throw error;
  }
};

export const getRequest = async (path: string, id: string) => {
  // const token = localStorage.getItem("token");

  // const config: AxiosRequestConfig = {
  //   method: "get",
  //   url: `${API_URL}/${path}/${id}`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     // Authorization: `Bearer ${token}`,
  //   },
  // };
  try {
    const response = await axios.get(`${API_URL}/${path}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
        // "secret-key": "2gdi@Advisors",
      },
    });
    return response;
  } catch (error) {
    console.error("Erreur de requête API:", error);
    throw error;
  }
};
