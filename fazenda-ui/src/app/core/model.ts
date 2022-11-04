// ADMINISTRATIVO

export class Setor {
  codigo?: number;
  descricao?: string;
}

export class Pessoa {
  codigo?: number;
  nome?: string;
  telefone?: string;
  dataCadastro?: Date;
}

export class Funcionario extends Pessoa {
  cpf?: string;
  dataNascimento?: Date;
  setor = new Setor();
}

export class Equipamento {
  codigo?: number;
  nome?: string;
  data?: Date;
}

// FINANCEIRO

export class Lancamento {
  codigo?: number;
  descricao?: string;
  data?: Date;
  valor?: number;
  tipoLancamento?: string;
  categoriaLancamento?: string;
}

// OPERACIONAL

export class Campo {
  codigo?: number;
  largura?: number;
  comprimento?: number;
}

export class Cultura {
  codigo?: number;
  descricao?: string;
}

export class Plantio {
  codigo?: number;
  campo = new Campo();
  cultura = new Cultura();
  qtd_colhido?: number;
  situacao?: boolean;
  dataPlantio?: Date;
  dataColheita?: Date;
}

export class Animal {
  codigo?: number;
  descricao?: string;
  tipoAnimal?: string;
}

export class Granja {
  codigo?: number;
  capacidade?: number;
  qtdAnimais?: number;
  animal = new Animal();
}

export class Pasto {
  codigo?: number;
  capacidade?: number;
  qtd_animais?: number;
  animal?= new Animal();
}

export class ProducaoLeite {
  codigo?: number;
  quantidade?: number;
  data?: Date;
}

export class Ovos {
  codigo?: number;
  quantidade?: number;
  data?: Date;
}
