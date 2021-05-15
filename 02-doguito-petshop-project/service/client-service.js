const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr');
  const conteduo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`;
  linhaNovoCliente.innerHTML = conteduo;
  return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

const listaClientes = () => {
  const url = 'http://localhost:3000/profile';
  return fetch(url)
    .then(response => response.json());
}

listaClientes()
  .then( data => {
    data.forEach(element => {
      tabela.appendChild(criaNovaLinha(element.nome, element.email));
    });
  });
