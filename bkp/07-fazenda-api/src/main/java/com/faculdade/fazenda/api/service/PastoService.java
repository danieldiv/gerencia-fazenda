package com.faculdade.fazenda.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Animal;
import com.faculdade.fazenda.api.model.Pasto;
import com.faculdade.fazenda.api.model.tipos.TipoAnimal;
import com.faculdade.fazenda.api.repository.AnimalRepository;
import com.faculdade.fazenda.api.repository.PastoRepository;
import com.faculdade.fazenda.api.service.exception.AnimalNaoPermitidoException;
import com.faculdade.fazenda.api.service.exception.CapacidadeSuperiorException;

@Service
public class PastoService {

	@Autowired
	private PastoRepository pastoRepository;

	@Autowired
	private AnimalRepository animalRepository;

	public Pasto salvar(Pasto pasto) {
		validarPasto(pasto);
		return this.pastoRepository.save(pasto);
	}

	public Pasto atualizar(Long codigo, Pasto pasto) {
		Pasto pastoSalvo = buscarPastoPeloCodigo(codigo);
		BeanUtils.copyProperties(pasto, pastoSalvo, "codigo");
		return this.pastoRepository.save(pastoSalvo);
	}

	private void validarPasto(Pasto pasto) {
		if (pasto.getQtdAnimal() > pasto.getCapacidade()) {
			throw new CapacidadeSuperiorException();
		}

		Animal animal = buscarAnimalExistente(pasto.getAnimal().getCodigo());

		if (!animal.getTipoAnimal().equals(TipoAnimal.GADO)) {
			throw new AnimalNaoPermitidoException();
		}
	}

	private Pasto buscarPastoPeloCodigo(Long codigo) {
		return this.pastoRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}

	private Animal buscarAnimalExistente(Long codigo) {
		return this.animalRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}
}
