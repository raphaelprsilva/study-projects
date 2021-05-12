class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Raphael";
cliente1.cpf = 10115002642;


const cliente2 = new Cliente();
cliente2.nome = "Danielle";
cliente2.cpf = 10111124565;

const contaCorrenteRaphael = new ContaCorrente();
contaCorrenteRaphael.saldo = 0;
contaCorrenteRaphael.agencia = 1001;

console.log(cliente1);

contaCorrenteRaphael.saldo = 100;
console.log(contaCorrenteRaphael);

contaCorrenteRaphael.sacar(200);



const contaCorrenteDanielle = new ContaCorrente();
contaCorrenteDanielle.saldo = 0;
contaCorrenteDanielle.agencia = 1002;

console.log(contaCorrenteRaphael);