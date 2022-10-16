package com.faculdade.fazenda.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Equipamento;
import com.faculdade.fazenda.api.repository.EquipamentoRepository;

@Service
public class EquipamentoService {

	@Autowired
	private EquipamentoRepository equipamentoRepository;

	public Equipamento atualizar(Long codigo, Equipamento equipamento) {
		Equipamento equipamentoSalvo = buscarSetorPeloCodigo(codigo);
		BeanUtils.copyProperties(equipamento, equipamentoSalvo, "codigo");
		return this.equipamentoRepository.save(equipamentoSalvo);
	}

	private Equipamento buscarSetorPeloCodigo(Long codigo) {
		return this.equipamentoRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}
}
