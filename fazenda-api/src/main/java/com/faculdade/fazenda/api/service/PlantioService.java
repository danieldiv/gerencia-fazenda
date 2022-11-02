package com.faculdade.fazenda.api.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Plantio;
import com.faculdade.fazenda.api.model.tipos.Unidade;
import com.faculdade.fazenda.api.repository.PlantioRepository;
import com.faculdade.fazenda.api.service.exception.DataNaoPermitidaException;

@Service
public class PlantioService {

	@Autowired
	private PlantioRepository plantioRepository;

	public Plantio salvar(Plantio plantio) {
		validarDataPlantio(plantio.getDataPlantio(), LocalDate.now());
		plantio.setUnidade(Unidade.QUILO);
		return this.plantioRepository.save(plantio);
	}

	public void atualizarPropridadeQuantidade(Long codigo, int quantidade) {
		Plantio plantioSalvo = buscarPlantioPeloCodigo(codigo);
		validarQuantidade(quantidade);
		plantioSalvo.setQtdColhido(plantioSalvo.getQtdColhido() + quantidade);
		plantioSalvo.setDataColheita(LocalDate.now());
		this.plantioRepository.save(plantioSalvo);
	}
	
	public void atualizarPropridadeSituacao(Long codigo, Boolean situacao) {
		Plantio plantioSalvo = buscarPlantioPeloCodigo(codigo);
		plantioSalvo.setSituacao(situacao);
		this.plantioRepository.save(plantioSalvo);
	}

	private Plantio buscarPlantioPeloCodigo(Long codigo) {
		return this.plantioRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}

	private void validarDataPlantio(LocalDate data1, LocalDate data2) {
		if (data1.isAfter(data2)) {
			throw new DataNaoPermitidaException();
		}
	}

	private void validarQuantidade(int quantidade) {
		if (quantidade <= 0) {
			throw new DataIntegrityViolationException(null);
		}
	}
}
