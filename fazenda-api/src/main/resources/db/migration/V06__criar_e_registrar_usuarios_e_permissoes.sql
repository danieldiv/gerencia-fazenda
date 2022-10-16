CREATE TABLE usuario (
	codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
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

INSERT INTO usuario (codigo, nome, email, senha) values (1, 'Administrador', 'admin@email.com', '$2a$10$3ehx1eBrHpnM0OfdLsAxlOHP2wZ2bB01zbvtzO78XtM3UMumpz4Ra');
INSERT INTO usuario (codigo, nome, email, senha) values (2, 'Daniel Sanches', 'daniel@email.com', '$2a$10$eQsBGCLjMR7RnKrBLKnTJOXIF5MEqfttZ7F86nL1zTfwVI8JHMZru');
INSERT INTO usuario (codigo, nome, email, senha) VALUES (3, 'Lucas Silva', 'lucas@email.com', '$2a$10$XSDI.ARAo/LW3P/TGqVVt.cSwV8G2QBd8JaydCMNJFoyJgTT2Q6ty');
INSERT INTO usuario (codigo, nome, email, senha) VALUES (4, 'Usuario Teste', 'usuario@email.com', '$2a$10$vsDdhL4FBy7LQ9SmiBwkdOTgPnxRH7pFO.1j48zl3Ombaa7jhmlmi');

INSERT INTO permissao (codigo, descricao) VALUES (1, 'ROLE_CADASTRAR_SETOR');
INSERT INTO permissao (codigo, descricao) VALUES (2, 'ROLE_PESQUISAR_SETOR');

INSERT INTO permissao (codigo, descricao) VALUES (3, 'ROLE_CADASTRAR_FUNCIONARIO');
INSERT INTO permissao (codigo, descricao) VALUES (4, 'ROLE_PESQUISAR_FUNCIONARIO');

INSERT INTO permissao (codigo, descricao) VALUES (5, 'ROLE_CADASTRAR_EQUIPAMENTO');
INSERT INTO permissao (codigo, descricao) VALUES (6, 'ROLE_PESQUISAR_EQUIPAMENTO');

INSERT INTO permissao (codigo, descricao) VALUES (7, 'ROLE_CADASTRAR_LANCAMENTO');
INSERT INTO permissao (codigo, descricao) VALUES (8, 'ROLE_PESQUISAR_LANCAMENTO');

INSERT INTO permissao (codigo, descricao) VALUES (9, 'ROLE_CADASTRAR_ANIMAL');
INSERT INTO permissao (codigo, descricao) VALUES (10, 'ROLE_PESQUISAR_ANIMAL');

INSERT INTO permissao (codigo, descricao) VALUES (11, 'ROLE_CADASTRAR_PASTO');
INSERT INTO permissao (codigo, descricao) VALUES (12, 'ROLE_PESQUISAR_PASTO');

INSERT INTO permissao (codigo, descricao) VALUES (13, 'ROLE_CADASTRAR_GRANJA');
INSERT INTO permissao (codigo, descricao) VALUES (14, 'ROLE_PESQUISAR_GRANJA');

INSERT INTO permissao (codigo, descricao) VALUES (15, 'ROLE_CADASTRAR_CAMPO');
INSERT INTO permissao (codigo, descricao) VALUES (16, 'ROLE_PESQUISAR_CAMPO');

INSERT INTO permissao (codigo, descricao) VALUES (17, 'ROLE_CADASTRAR_CULTURA');
INSERT INTO permissao (codigo, descricao) VALUES (18, 'ROLE_PESQUISAR_CULTURA');

INSERT INTO permissao (codigo, descricao) VALUES (19, 'ROLE_CADASTRAR_PRODUCAO_LEITE');
INSERT INTO permissao (codigo, descricao) VALUES (20, 'ROLE_REMOVER_PRODUCAO_LEITE');
INSERT INTO permissao (codigo, descricao) VALUES (21, 'ROLE_PESQUISAR_PRODUCAO_LEITE');

INSERT INTO permissao (codigo, descricao) VALUES (22, 'ROLE_CADASTRAR_OVOS');
INSERT INTO permissao (codigo, descricao) VALUES (23, 'ROLE_REMOVER_OVOS');
INSERT INTO permissao (codigo, descricao) VALUES (24, 'ROLE_PESQUISAR_OVOS');

INSERT INTO permissao (codigo, descricao) VALUES (25, 'ROLE_CADASTRAR_PLANTIO');
INSERT INTO permissao (codigo, descricao) VALUES (26, 'ROLE_REMOVER_PLANTIO');
INSERT INTO permissao (codigo, descricao) VALUES (27, 'ROLE_PESQUISAR_PLANTIO');

INSERT INTO permissao (codigo, descricao) VALUES (28, 'ROLE_CADASTRAR_USUARIO');
INSERT INTO permissao (codigo, descricao) VALUES (29, 'ROLE_PESQUISAR_USUARIO');

INSERT INTO permissao (codigo, descricao) VALUES (30, 'ROLE_CADASTRAR_PERMISSAO');
INSERT INTO permissao (codigo, descricao) VALUES (31, 'ROLE_PESQUISAR_PERMISSAO');
