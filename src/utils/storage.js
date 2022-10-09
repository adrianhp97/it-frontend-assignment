export const get = (key) => {
  return localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}---${key}`);
};

export const set = (key, value) => {
  localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}---${key}`, value);
  window.dispatchEvent(new Event("storage"));
};
