package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Animal;
import com.faculdade.fazenda.api.repository.AnimalRepository;

@RestController
@RequestMapping("/animais")
public class AnimalResource {

	@Autowired
	private AnimalRepository animalRepository;
	
	@GetMapping
	public List<Animal> listar() {
		return this.animalRepository.findAll();
	}
}
