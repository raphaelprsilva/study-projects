import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Raphael', 2000, 11122233345);
diretor.cadastrarSenha('123456789');

const gerente = new Gerente('Rodrigo', 1000, 11122233389);
gerente.cadastrarSenha('123465');

const estaLogado = SistemaAutenticacao.login(gerente, '123456789');

console.log(estaLogado);