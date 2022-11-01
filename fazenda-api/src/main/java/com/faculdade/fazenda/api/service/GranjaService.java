package com.faculdade.fazenda.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Animal;
import com.faculdade.fazenda.api.model.Granja;
import com.faculdade.fazenda.api.model.tipos.TipoAnimal;
import com.faculdade.fazenda.api.repository.AnimalRepository;
import com.faculdade.fazenda.api.repository.GranjaRepository;
import com.faculdade.fazenda.api.service.exception.AnimalNaoPermitidoException;
import com.faculdade.fazenda.api.service.exception.CapacidadeSuperiorException;

@Service
public class GranjaService {

	@Autowired
	private GranjaRepository granjaRepository;

	@Autowired
	private AnimalRepository animalRepository;

	public Granja salvar(Granja granja) {
		validarGranja(granja);
		return this.granjaRepository.save(granja);
	}

	public Granja atualizar(Long codigo, Granja granja) {
		validarGranja(granja);
		Granja granjaSalva = buscarGranjaPeloCodigo(codigo);
		BeanUtils.copyProperties(granja, granjaSalva, "codigo");
		return this.granjaRepository.save(granjaSalva);
	}

	private void validarGranja(Granja granja) {
		if (granja.getQtdAnimais() > granja.getCapacidade()) {
			System.out.println("teste");
			throw new CapacidadeSuperiorException();
		}

		Animal animal = buscarAnimalExistente(granja.getAnimal().getCodigo());
		
		if (!animal.getTipoAnimal().equals(TipoAnimal.GALINHA)) {
			throw new AnimalNaoPermitidoException();
		}
	}

	private Granja buscarGranjaPeloCodigo(Long codigo) {
		return this.granjaRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}

	private Animal buscarAnimalExistente(Long codigo) {
		return this.animalRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}
}
