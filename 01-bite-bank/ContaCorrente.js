export class ContaCorrente {
  agencia;
  cliente;

  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
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