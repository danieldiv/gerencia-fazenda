package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Setor;
import com.faculdade.fazenda.api.repository.SetorRepository;

@RestController
@RequestMapping("/setores")
public class SetorResource {

	@Autowired
	private SetorRepository setorRepository;
	
	@GetMapping
	public List<Setor> listar() {
		return this.setorRepository.findAll();
	}
}
