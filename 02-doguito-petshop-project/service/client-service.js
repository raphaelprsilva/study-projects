const listaClientes = () => {
  const url = 'http://localhost:3000/profile';
  return fetch(url)
    .then(response => response.json());
}

const criaCliente = (nome, email) => {
  return fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
    .then(resposta => {
      return resposta.body;
    });
};

export const clienteService = {
  listaClientes,
  criaCliente,
};