import axios from "axios";
import { parseCookies } from "nookies";

export const getClientApi = (ctx?: any) => {
  const { ["nokopy.cookies"]: token } = parseCookies(ctx);
  const api = axios.create({
    baseURL: "http://localhost:3333",
  });

  if (token) {
    api.defaults.headers["common"].Authorization = `Bearer ${token}`;
  }

  return api;
};
