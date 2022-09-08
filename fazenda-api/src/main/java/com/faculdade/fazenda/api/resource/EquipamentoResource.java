package com.faculdade.fazenda.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Equipamento;
import com.faculdade.fazenda.api.repository.EquipamentoRepository;

@RestController
@RequestMapping("/equipamentos")
public class EquipamentoResource {

	@Autowired
	private EquipamentoRepository equipamentoRepository;
	
	@GetMapping
	public List<Equipamento> listar() {
		return this.equipamentoRepository.findAll();
	}
}
