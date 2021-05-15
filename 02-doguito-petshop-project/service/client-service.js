const listaClientes = () => {
  const url = 'http://localhost:3000/profile';
  return fetch(url)
    .then(response => response.json());
}
