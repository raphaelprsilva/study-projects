class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor >= 0) {
      this.#saldo += valor;
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
contaCorrenteRaphael.agencia = 1001;

console.log(contaCorrenteRaphael);

const contaCorrenteDanielle = new ContaCorrente();
contaCorrenteDanielle.saldo = 0;
contaCorrenteDanielle.agencia = 1002;
