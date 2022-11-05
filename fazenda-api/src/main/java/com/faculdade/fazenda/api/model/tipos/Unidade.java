package com.faculdade.fazenda.api.model.tipos;

public enum Unidade {

	QUILO("Quilo"),
	DUZIA("Duzia"),
	LITRO("Litro");

	private final String descricao;

	private Unidade(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
}
