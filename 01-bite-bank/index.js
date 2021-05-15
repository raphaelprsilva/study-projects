import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente('Raphael', 11122233309);
const cliente2 = new Cliente('Danielle', 88822233309);

const contaCorrente = new ContaCorrente(1001, cliente2);
const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
const contaSalarioRaphael = new ContaSalario(cliente1);

contaSalarioRaphael.depositar(100);
contaSalarioRaphael.sacar(50);