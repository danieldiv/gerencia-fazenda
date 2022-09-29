package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Ovos;
import com.faculdade.fazenda.api.repository.OvosRepository;

@RestController
@RequestMapping("/ovos")
public class OvosResource {
	
	@Autowired
	private OvosRepository ovosRepository;
	
	@GetMapping
	public List<Ovos> listar() {
		return this.ovosRepository.findAll();
	}
}
