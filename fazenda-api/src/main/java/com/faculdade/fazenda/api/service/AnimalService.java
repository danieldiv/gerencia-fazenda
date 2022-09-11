package com.faculdade.fazenda.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Animal;
import com.faculdade.fazenda.api.repository.AnimalRepository;

@Service
public class AnimalService {

	@Autowired
	private AnimalRepository animalRepository;

	public Animal atualizar(Long codigo, Animal animal) {
		Animal animalSalvo = buscarAnimalPeloCodigo(codigo);
		BeanUtils.copyProperties(animal, animalSalvo, "codigo");
		return this.animalRepository.save(animalSalvo);
	}

	private Animal buscarAnimalPeloCodigo(Long codigo) {
		return this.animalRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}
}
