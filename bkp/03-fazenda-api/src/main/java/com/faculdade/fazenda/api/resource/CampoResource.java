package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Campo;
import com.faculdade.fazenda.api.repository.CampoRepository;

@RestController
@RequestMapping("/campos")
public class CampoResource {

	@Autowired
	private CampoRepository campoRepository;
	
	@GetMapping
	public List<Campo> listar() {
		return this.campoRepository.findAll();
	}
}
