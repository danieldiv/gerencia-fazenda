CREATE TABLE lancamento (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50) NOT NULL,
	data DATE NOT NULL,
	valor DECIMAL(10,2) NOT NULL,
	categoria VARCHAR(20) NOT NULL,
	tipo VARCHAR(20) NOT NULL
);
