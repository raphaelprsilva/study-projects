import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;

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

  constructor (agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeContas += 1;
  }

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