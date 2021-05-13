import {Cliente} from '/home/raphael/Documentos/Raphael/Learning_Projects/study-projects/01-bite-bank/Cliente.js';
import {ContaCorrente} from '/home/raphael/Documentos/Raphael/Learning_Projects/study-projects/01-bite-bank/ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Raphael";
cliente1.cpf = 10115002642;


// const cliente2 = new Cliente();
// cliente2.nome = "Danielle";
// cliente2.cpf = 10111124565;

const contaCorrenteRaphael = new ContaCorrente();
contaCorrenteRaphael.agencia = 1001;
contaCorrenteRaphael.cliente = cliente1;
contaCorrenteRaphael.depositar(100);


const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 1002;

contaCorrenteRaphael.transferir(20, conta2);

console.log(contaCorrenteRaphael);

console.log(conta2._saldo);
