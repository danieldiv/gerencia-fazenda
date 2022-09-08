CREATE TABLE usuario (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	usuario VARCHAR(50) NOT NULL,
	senha VARCHAR(150) NOT NULL
);

CREATE TABLE permissao (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50) NOT NULL
);

CREATE TABLE usuario_permissao (
	codigo_usuario BIGINT NOT NULL,
	codigo_permissao BIGINT NOT NULL,
	PRIMARY KEY(codigo_usuario, codigo_permissao),
	FOREIGN KEY(codigo_usuario) REFERENCES usuario(codigo),
	FOREIGN KEY(codigo_permissao) REFERENCES permissao(codigo)
);

INSERT INTO usuario (codigo, usuario, senha) VALUES (1, 'admin', 'admin');
INSERT INTO usuario (codigo, usuario, senha) VALUES (2, 'daniel', 'daniel');
INSERT INTO usuario (codigo, usuario, senha) VALUES (3, 'lucas', 'lucas');

INSERT INTO permissao (codigo, descricao) VALUES (1, 'ROLE_CADASTRAR_SETOR');
INSERT INTO permissao (codigo, descricao) VALUES (2, 'ROLE_PESQUISAR_SETOR');

INSERT INTO permissao (codigo, descricao) VALUES (3, 'ROLE_CADASTRAR_FUNCIONARIO');
INSERT INTO permissao (codigo, descricao) VALUES (4, 'ROLE_REMOVER_FUNCIONARIO');
INSERT INTO permissao (codigo, descricao) VALUES (5, 'ROLE_PESQUISAR_FUNCIONARIO');

INSERT INTO permissao (codigo, descricao) VALUES (6, 'ROLE_CADASTRAR_EQUIPAMENTO');
INSERT INTO permissao (codigo, descricao) VALUES (7, 'ROLE_REMOVER_EQUIPAMENTO');
INSERT INTO permissao (codigo, descricao) VALUES (8, 'ROLE_PESQUISAR_EQUIPAMENTO');

INSERT INTO permissao (codigo, descricao) VALUES (9, 'ROLE_CADASTRAR_LANCAMENTO');
INSERT INTO permissao (codigo, descricao) VALUES (10, 'ROLE_REMOVER_LANCAMENTO');
INSERT INTO permissao (codigo, descricao) VALUES (11, 'ROLE_PESQUISAR_LANCAMENTO');

INSERT INTO permissao (codigo, descricao) VALUES (12, 'ROLE_CADASTRAR_ANIMAL');
INSERT INTO permissao (codigo, descricao) VALUES (13, 'ROLE_REMOVER_ANIMAL');
INSERT INTO permissao (codigo, descricao) VALUES (14, 'ROLE_PESQUISAR_ANIMAL');

INSERT INTO permissao (codigo, descricao) VALUES (15, 'ROLE_CADASTRAR_PASTO');
INSERT INTO permissao (codigo, descricao) VALUES (16, 'ROLE_REMOVER_PASTO');
INSERT INTO permissao (codigo, descricao) VALUES (17, 'ROLE_PESQUISAR_PASTO');

INSERT INTO permissao (codigo, descricao) VALUES (18, 'ROLE_CADASTRAR_GRANJA');
INSERT INTO permissao (codigo, descricao) VALUES (19, 'ROLE_REMOVER_GRANJA');
INSERT INTO permissao (codigo, descricao) VALUES (20, 'ROLE_PESQUISAR_GRANJA');

INSERT INTO permissao (codigo, descricao) VALUES (21, 'ROLE_CADASTRAR_CAMPO');
INSERT INTO permissao (codigo, descricao) VALUES (22, 'ROLE_REMOVER_CAMPO');
INSERT INTO permissao (codigo, descricao) VALUES (23, 'ROLE_PESQUISAR_CAMPO');

INSERT INTO permissao (codigo, descricao) VALUES (24, 'ROLE_CADASTRAR_CULTURA');
INSERT INTO permissao (codigo, descricao) VALUES (25, 'ROLE_REMOVER_CULTURA');
INSERT INTO permissao (codigo, descricao) VALUES (26, 'ROLE_PESQUISAR_CULTURA');

INSERT INTO permissao (codigo, descricao) VALUES (27, 'ROLE_CADASTRAR_PRODUCAO_LEITE');
INSERT INTO permissao (codigo, descricao) VALUES (28, 'ROLE_REMOVER_PRODUCAO_LEITE');
INSERT INTO permissao (codigo, descricao) VALUES (29, 'ROLE_PESQUISAR_PRODUCAO_LEITE');

INSERT INTO permissao (codigo, descricao) VALUES (30, 'ROLE_CADASTRAR_OVOS');
INSERT INTO permissao (codigo, descricao) VALUES (31, 'ROLE_REMOVER_OVOS');
INSERT INTO permissao (codigo, descricao) VALUES (32, 'ROLE_PESQUISAR_OVOS');

INSERT INTO permissao (codigo, descricao) VALUES (33, 'ROLE_CADASTRAR_PLANTIO');
INSERT INTO permissao (codigo, descricao) VALUES (34, 'ROLE_REMOVER_PLANTIO');
INSERT INTO permissao (codigo, descricao) VALUES (35, 'ROLE_PESQUISAR_PLANTIO');

INSERT INTO permissao (codigo, descricao) VALUES (36, 'ROLE_CADASTRAR_USUARIO');
INSERT INTO permissao (codigo, descricao) VALUES (37, 'ROLE_PESQUISAR_USUARIO');

INSERT INTO permissao (codigo, descricao) VALUES (38, 'ROLE_CADASTRAR_PERMISSAO');
INSERT INTO permissao (codigo, descricao) VALUES (39, 'ROLE_PESQUISAR_PERMISSAO');
