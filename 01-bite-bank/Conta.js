export class Conta {
  constructor (saldoInicial, cliente, agencia) {
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

  sacar(valor) {
    let taxa = 1;
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
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