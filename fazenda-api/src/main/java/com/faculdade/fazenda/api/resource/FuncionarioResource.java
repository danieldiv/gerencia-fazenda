package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Funcionario;
import com.faculdade.fazenda.api.repository.FuncionarioRepository;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioResource {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@GetMapping
	public List<Funcionario> listar() {
		return this.funcionarioRepository.findAll();
	}
}
