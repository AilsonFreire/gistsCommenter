import api from "../baseURL";

export const getGists = async (id: string) => {
  try {
    api.setHeader("Accept", "application/vnd.github.v3+json");
    return await api.get(`gists/${id}`);
  } catch (error) {
    return error;
  }
};
