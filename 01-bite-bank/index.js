import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Raphael', 2000, 11122233345);
diretor.cadastrarSenha('123456789');

const gerente = new Gerente('Rodrigo', 1000, 11122233389);
gerente.cadastrarSenha('123465');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123465');


const newCliente = new Cliente('Batatinha', 1114447789, '123');
const newClienteLogado = SistemaAutenticacao.login(newCliente, '1234');

console.log(diretorEstaLogado, gerenteEstaLogado, newClienteLogado);
