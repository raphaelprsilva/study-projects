import {Cliente} from '/home/raphael/Documentos/Raphael/Learning_Projects/study-projects/01-bite-bank/Cliente.js';
import {ContaCorrente} from '/home/raphael/Documentos/Raphael/Learning_Projects/study-projects/01-bite-bank/ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Raphael";
cliente1.cpf = 10115002642;


const cliente2 = new Cliente();
cliente2.nome = "Danielle";
cliente2.cpf = 10111124565;

const contaCorrenteRaphael = new ContaCorrente();
contaCorrenteRaphael.agencia = 1001;

const valorDepositado = contaCorrenteRaphael.depositar(100);
const valorSacado = contaCorrenteRaphael.sacar(50);
console.log(valorDepositado);
console.log(contaCorrenteRaphael);

const contaCorrenteDanielle = new ContaCorrente();
contaCorrenteDanielle.saldo = 0;
contaCorrenteDanielle.agencia = 1002;
