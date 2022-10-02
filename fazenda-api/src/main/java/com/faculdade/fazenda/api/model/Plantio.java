package com.faculdade.fazenda.api.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.faculdade.fazenda.api.model.tipos.Unidade;

@Entity
@Table(name = "plantio")
public class Plantio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;

	@NotNull
	@Column(name = "qtd_colhido")
	private int qtdColhido;

	@NotNull
	private boolean situacao;

	@NotNull
	@Column(name = "data_plantio")
	private LocalDate dataPlantio;

	@Column(name = "data_colheita")
	private LocalDate dataColheita;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "codigo_cultura")
	private Cultura cultura;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "codigo_campo")
	private Campo campo;

	@NotNull
	@Enumerated
	private Unidade unidade;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public int getQtdColhido() {
		return qtdColhido;
	}

	public void setQtdColhido(int qtdColhido) {
		this.qtdColhido = qtdColhido;
	}

	public boolean isSituacao() {
		return situacao;
	}

	public void setSituacao(boolean situacao) {
		this.situacao = situacao;
	}

	public LocalDate getDataPlantio() {
		return dataPlantio;
	}

	public void setDataPlantio(LocalDate dataPlantio) {
		this.dataPlantio = dataPlantio;
	}

	public LocalDate getDataColheita() {
		return dataColheita;
	}

	public void setDataColheita(LocalDate dataColheita) {
		this.dataColheita = dataColheita;
	}

	public Cultura getCultura() {
		return cultura;
	}

	public void setCultura(Cultura cultura) {
		this.cultura = cultura;
	}

	public Campo getCampo() {
		return campo;
	}

	public void setCampo(Campo campo) {
		this.campo = campo;
	}

	public Unidade getUnidade() {
		return unidade;
	}

	public void setUnidade(Unidade unidade) {
		this.unidade = unidade;
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
		Plantio other = (Plantio) obj;
		return Objects.equals(codigo, other.codigo);
	}

}
