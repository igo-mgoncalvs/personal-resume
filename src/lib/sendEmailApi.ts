import axios from "axios";

export const sendEmailApi = axios.create({
  baseURL: process.env.sendEmailApi,
})
