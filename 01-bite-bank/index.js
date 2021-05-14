import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente('Raphael', 11122233309);
const cliente2 = new Cliente('Danielle', 88822233309);

const conta1 = new Conta(50, cliente1, 1001);
const conta2 = new Conta(100, cliente2, 1002);

console.log(conta1);
console.log(conta2);