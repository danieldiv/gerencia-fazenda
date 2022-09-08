package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Granja;
import com.faculdade.fazenda.api.repository.GranjaRepository;

@RestController
@RequestMapping("/granjas")
public class GranjaResource {

	@Autowired
	private GranjaRepository granjaRepository;
	
	@GetMapping
	public List<Granja> listar() {
		return this.granjaRepository.findAll();
	}
}
