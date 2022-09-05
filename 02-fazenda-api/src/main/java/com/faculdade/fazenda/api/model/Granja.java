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
@Table(name = "granja")
public class Granja {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;

	@NotNull
	private int capacidade;

	@NotNull
	private int qtdAnimais;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "codigo_animal")
	private Animal animal;

	@JsonIgnoreProperties("granja")
	@OneToMany(mappedBy = "granja", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Ovos> ovos;

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

	public int getQtdAnimais() {
		return qtdAnimais;
	}

	public void setQtdAnimais(int qtdAnimais) {
		this.qtdAnimais = qtdAnimais;
	}

	public Animal getAnimal() {
		return animal;
	}

	public void setAnimal(Animal animal) {
		this.animal = animal;
	}

	public List<Ovos> getOvos() {
		return ovos;
	}

	public void setOvos(List<Ovos> ovos) {
		this.ovos = ovos;
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
		Granja other = (Granja) obj;
		return Objects.equals(codigo, other.codigo);
	}
}
