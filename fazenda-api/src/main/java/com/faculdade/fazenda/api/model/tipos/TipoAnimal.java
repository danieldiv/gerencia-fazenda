package com.faculdade.fazenda.api.model.tipos;

public enum TipoAnimal {

	GADO("Gado"),
	GALINHA("Galinha");

	private final String descricao;

	private TipoAnimal(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
}
