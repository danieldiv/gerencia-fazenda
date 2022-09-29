package com.faculdade.fazenda.api.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.EnumType;
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
@Table(name = "producao_leite")
public class ProducaoLeite {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;

	@NotNull
	private int quantidade;

	@NotNull
	private LocalDate data;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "codigo_pasto")
	private Pasto pasto;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Unidade unidade;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public Pasto getPasto() {
		return pasto;
	}

	public void setPasto(Pasto pasto) {
		this.pasto = pasto;
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
		ProducaoLeite other = (ProducaoLeite) obj;
		return Objects.equals(codigo, other.codigo);
	}

}
