package com.faculdade.fazenda.api.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.ProducaoLeite;
import com.faculdade.fazenda.api.model.tipos.Unidade;
import com.faculdade.fazenda.api.repository.ProducaoLeiteRepository;

@Service
public class ProducaoLeiteService {

	@Autowired
	private ProducaoLeiteRepository producaoLeiteRepository;

	public ProducaoLeite salvar(ProducaoLeite producaoLeite) {
		producaoLeite.setData(LocalDate.now());
		producaoLeite.setUnidade(Unidade.LITRO);
		validarQuantidade(producaoLeite.getQuantidade());
		return this.producaoLeiteRepository.save(producaoLeite);
	}

	public void atualizarPropridadeQuantidade(Long codigo, int quantidade) {
		ProducaoLeite producaoLeiteSalvo = buscarProducaoLeitePeloCodigo(codigo);
		validarQuantidade(quantidade);
		producaoLeiteSalvo.setQuantidade(producaoLeiteSalvo.getQuantidade() + quantidade);
		this.producaoLeiteRepository.save(producaoLeiteSalvo);
	}

	private ProducaoLeite buscarProducaoLeitePeloCodigo(Long codigo) {
		return this.producaoLeiteRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}

	private void validarQuantidade(int quantidade) {
		if (quantidade <= 0) {
			throw new DataIntegrityViolationException(null);
		}
	}
}
