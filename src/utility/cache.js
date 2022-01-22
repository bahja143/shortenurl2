const key = "url";

const store = (values) => {
  try {
    const array = get();
    if (array)
      return localStorage.setItem(key, JSON.stringify([values, ...array]));

    return localStorage.setItem(key, JSON.stringify([values]));
  } catch (error) {
    console.log(error);
  }
};

const get = () => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
