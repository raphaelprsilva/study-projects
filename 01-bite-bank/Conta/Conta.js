// É uma classe abstrata, pois não pode ser invocada

export class Conta {
  constructor (saldoInicial, cliente, agencia) {
    if (this.constructor === Conta) {
      throw new Error('Você não deveria instanciar esse objeto do tipo Conta.');
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente (novoCliente) {
    if (novoCliente instanceof Cliente) {
      this._cliente = novoCliente;
    }
  }

  get cliente () {
    return this._cliente;
  }


  get saldo() {
    return this._saldo;
  }

  // Este método é abstrato, ou seja, todas as classes que herdarem a
  // classe Conta, deverão implementar o método 'sacar'
  sacar(valor) { 
    throw new Error('O método sacar da conta é abstrato.');
  }

  // Criando um método privado para poder usar nos demais tipos de contas
  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    // Caso o valor a ser sacado seja maior do que o saldo, irá retornar 0
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
    return valor;
  }

  transferir(valor, contaATransferir) {
    const valorSacado = this.sacar(valor);
    contaATransferir.depositar(valorSacado);
  }
}