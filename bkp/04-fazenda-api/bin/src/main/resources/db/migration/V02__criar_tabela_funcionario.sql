CREATE TABLE funcionario (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	data_cadastro DATE NOT NULL,
	data_nascimento DATE NOT NULL,
	codigo_setor BIGINT NOT NULL,
	FOREIGN KEY(codigo_setor) REFERENCES setor(codigo)
);
