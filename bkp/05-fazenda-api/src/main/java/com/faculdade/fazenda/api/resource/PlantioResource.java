package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Plantio;
import com.faculdade.fazenda.api.repository.PlantioRepository;

@RestController
@RequestMapping("/plantios")
public class PlantioResource {

	@Autowired
	private PlantioRepository plantioRepository;
	
	@GetMapping
	public List<Plantio> listar() {
		return this.plantioRepository.findAll();
	}
}
