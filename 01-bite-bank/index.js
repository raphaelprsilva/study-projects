import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente('Raphael', 11122233309);
const cliente2 = new Cliente('Danielle', 88822233309);

const contaCorrente = new ContaCorrente(1001, cliente2);
const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);

contaCorrente.depositar(100);
contaCorrente.sacar(40);

console.log(contaPoupanca);
console.log(contaCorrente);
