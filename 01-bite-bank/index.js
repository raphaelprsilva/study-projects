class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Raphael";
cliente1.cpf = 10115002642;
cliente1.agencia = 1001;
cliente1.saldo = 0;


cliente2.nome = "Danielle";
cliente2.cpf = 10111124565;
cliente2.agencia = 1002;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);