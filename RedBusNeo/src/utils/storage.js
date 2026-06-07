export const load = (key, def) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || def;
  } catch {
    return def;
  }
};

export const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
