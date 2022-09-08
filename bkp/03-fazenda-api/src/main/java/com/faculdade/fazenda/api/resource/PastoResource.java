package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Pasto;
import com.faculdade.fazenda.api.repository.PastoRepository;

@RestController
@RequestMapping("/pastos")
public class PastoResource {

	@Autowired
	private PastoRepository pastoRepository;
	
	@GetMapping
	public List<Pasto> listar() {
		return this.pastoRepository.findAll();
	}
}
