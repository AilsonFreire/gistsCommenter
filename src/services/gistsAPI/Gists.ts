import { encode as btoa } from "base-64";
import api from "../baseURL";

export const getGists = async (id: string) => {
  try {
    api.setHeader("Accept", "application/vnd.github.v3+json");
    return await api.get(`gists/${id}`);
  } catch (error) {
    return error;
  }
};

export const saveComment = async (email: string, passowrd: string, gistId: string, comment: string) => {
  try {
    const body = JSON.stringify({ body: comment });
    api.setHeader("Authorization", `Basic ${btoa(email + ":" + passowrd)}`);
    return await api.post(`gists/${gistId}/comments`, body);
  } catch (error) {
    return error;
  }
};
