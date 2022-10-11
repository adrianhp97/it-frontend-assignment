import api from "utils/api";

export const getProviders = (lang) => {
  return api.get('/service-providers', { params: { lang } });
};
