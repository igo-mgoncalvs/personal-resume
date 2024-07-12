import axios from "axios";

export const sendEmailApi = axios.create({
  baseURL: 'https://imgor-server-v2.uc.r.appspot.com',
})
