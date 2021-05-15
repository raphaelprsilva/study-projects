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

  // Este método sacar é público, porém, está utilizando um método privado
  sacar(valor) {
    let taxa = 1;
    // Invocando o método privado _sacar 
    return this._sacar(valor, taxa);
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