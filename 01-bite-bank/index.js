import {Cliente} from '/home/raphael/Documentos/Raphael/Learning_Projects/study-projects/01-bite-bank/Cliente.js';
import {ContaCorrente} from '/home/raphael/Documentos/Raphael/Learning_Projects/study-projects/01-bite-bank/ContaCorrente.js';

const cliente1 = new Cliente('Raphael', 10115002642);
const cliente2 = new Cliente('Danielle', 10111124565);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);

conta1.depositar(100);
conta1.transferir(20, conta2);

console.log(cliente1);
