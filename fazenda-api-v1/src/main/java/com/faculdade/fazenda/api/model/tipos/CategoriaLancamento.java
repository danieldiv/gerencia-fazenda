package com.faculdade.fazenda.api.model.tipos;

public enum CategoriaLancamento {

	CLIENTE("Cliente"),
	FORNECEDOR("Fornecedor"),
	FUNCIONARIO("Funcionario"),
	OUTRO("Outro");

	private final String descricao;

	private CategoriaLancamento(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
}
