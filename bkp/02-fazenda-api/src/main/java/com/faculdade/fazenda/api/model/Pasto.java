package com.faculdade.fazenda.api.model;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "pasto")
public class Pasto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;

	@NotNull
	private int capacidade;

	@NotNull
	private int qtdAnimal;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "codigo_animal")
	private Animal animal;

	@JsonIgnoreProperties("pasto")
	@OneToMany(mappedBy = "pasto", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ProducaoLeite> prodLeites;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public int getCapacidade() {
		return capacidade;
	}

	public void setCapacidade(int capacidade) {
		this.capacidade = capacidade;
	}

	public int getQtdAnimal() {
		return qtdAnimal;
	}

	public void setQtdAnimal(int qtdAnimal) {
		this.qtdAnimal = qtdAnimal;
	}

	public Animal getAnimal() {
		return animal;
	}

	public void setAnimal(Animal animal) {
		this.animal = animal;
	}

	public List<ProducaoLeite> getProdLeites() {
		return prodLeites;
	}

	public void setProdLeites(List<ProducaoLeite> prodLeites) {
		this.prodLeites = prodLeites;
	}

	@Override
	public int hashCode() {
		return Objects.hash(codigo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pasto other = (Pasto) obj;
		return Objects.equals(codigo, other.codigo);
	}

}
