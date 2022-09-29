CREATE TABLE animal (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50) NOT NULL,
	tipo VARCHAR(20) NOT NULL
);

CREATE TABLE granja (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	capacidade INT NOT NULL,
	qtd_animais INT NOT NULL,
	codigo_animal BIGINT NOT NULL,
	FOREIGN KEY(codigo_animal) REFERENCES animal(codigo)
);

CREATE TABLE pasto (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	capacidade INT NOT NULL,
	qtd_animais INT NOT NULL,
	codigo_animal BIGINT NOT NULL,
	FOREIGN KEY(codigo_animal) REFERENCES animal(codigo)
);

CREATE TABLE ovos (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	quantidade INT NOT NULL,
	data DATE NOT NULL,
	unidade VARCHAR(20) NOT NULL,
	codigo_granja BIGINT NOT NULL,
	FOREIGN KEY(codigo_granja) REFERENCES granja(codigo)
);

CREATE TABLE producao_leite (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	quantidade DECIMAL(10,2) NOT NULL,
	data DATE NOT NULL,
	unidade VARCHAR(20) NOT NULL,
	codigo_pasto BIGINT NOT NULL,
	FOREIGN KEY(codigo_pasto) REFERENCES pasto(codigo)
);

CREATE TABLE campo (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	largura INT NOT NULL,
	comprimento INT NOT NULL
);

CREATE TABLE cultura (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(20) NOT NULL
);

CREATE TABLE plantio (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	qtd_colhido INT NOT NULL,
	situacao BOOLEAN NOT NULL,
	data_plantio DATE NOT NULL,
	data_colheita DATE,
	unidade VARCHAR(20) NOT NULL,
	codigo_campo BIGINT NOT NULL,
	codigo_cultura BIGINT NOT NULL,
	FOREIGN KEY(codigo_campo) REFERENCES campo(codigo),
	FOREIGN KEY(codigo_cultura) REFERENCES cultura(codigo)
);
