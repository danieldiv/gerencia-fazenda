package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.ProducaoLeite;
import com.faculdade.fazenda.api.repository.ProducaoLeiteRepository;

@RestController
@RequestMapping("/producaoleite")
public class ProducaoLeiteResource {

	@Autowired
	private ProducaoLeiteRepository producaoLeiteRepository;
	
	@GetMapping
	public List<ProducaoLeite> listar() {
		return this.producaoLeiteRepository.findAll();
	}
}
