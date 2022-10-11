export const get = (key) => {
  return localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}---${key}`);
};

export const getAll = () => {
  const value = {};

  const keys = Object.keys(localStorage);

  for (const key of keys) {
    const token = key.split('---');
    value[token[1]] = localStorage.getItem(key);
  }

  return value;
}

export const set = (key, value, dispatchEventType = "general") => {
  localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}---${key}`, value);
  window.dispatchEvent(dispatchEventType === "general" ? new Event("storage") : new Event(`storage:${key}`));
};
