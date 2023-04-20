function getImages(query) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`There are no images matching your request: ${query}`));
  });
}

const api = {
  getImages,
};

export default api;