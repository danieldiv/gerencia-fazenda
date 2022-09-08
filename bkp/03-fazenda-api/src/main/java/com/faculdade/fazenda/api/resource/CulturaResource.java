package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Cultura;
import com.faculdade.fazenda.api.repository.CulturaRepository;

@RestController
@RequestMapping("/culturas")
public class CulturaResource {

	@Autowired
	private CulturaRepository culturaRepository;
	
	@GetMapping
	public List<Cultura> listar() {
		return this.culturaRepository.findAll();
	}
}
