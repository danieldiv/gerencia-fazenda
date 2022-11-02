package com.faculdade.fazenda.api.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Ovos;
import com.faculdade.fazenda.api.model.tipos.Unidade;
import com.faculdade.fazenda.api.repository.OvosRepository;

@Service
public class OvosService {

	@Autowired
	private OvosRepository ovosRepository;

	public Ovos salvar(Ovos ovos) {
		ovos.setData(LocalDate.now());
		ovos.setUnidade(Unidade.DUZIA);
		validarQuantidade(ovos.getQuantidade());
		return this.ovosRepository.save(ovos);
	}

	public void atualizarPropridadeQuantidade(Long codigo, int quantidade) {
		Ovos ovosSalvo = buscarOvosPeloCodigo(codigo);
		validarQuantidade(quantidade);
		ovosSalvo.setQuantidade(ovosSalvo.getQuantidade() + quantidade);
		this.ovosRepository.save(ovosSalvo);
	}

	private Ovos buscarOvosPeloCodigo(Long codigo) {
		return this.ovosRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}

	private void validarQuantidade(int quantidade) {
		if (quantidade <= 0) {
			throw new DataIntegrityViolationException(null);
		}
	}
}
