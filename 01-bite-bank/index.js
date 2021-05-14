import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente('Raphael', 11122233309);
const cliente2 = new Cliente('Danielle', 88822233309);

const conta1 = new ContaCorrente(1001, cliente1);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contaPoupanca);