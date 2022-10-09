import api from "utils/api";

export const getLanguages = () => {
  return api.get('/localization/languages');
};
