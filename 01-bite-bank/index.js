import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";

const diretor = new Diretor('Raphael', 2000, 11122233345);
const gerente = new Gerente('Rodrigo', 1000, 11122233389);

SistemaAutenticacao.login(diretor, '123456789');