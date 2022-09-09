package com.faculdade.fazenda.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Setor;
import com.faculdade.fazenda.api.repository.SetorRepository;

@Service
public class SetorService {

	@Autowired
	private SetorRepository setorRepository;

	public Setor atualizar(Long codigo, Setor setor) {
		Setor setorSalvo = buscarSetorExistente(codigo);
		BeanUtils.copyProperties(setor, setorSalvo, "codigo");
		return this.setorRepository.save(setorSalvo);
	}

	private Setor buscarSetorExistente(Long codigo) {
		return this.setorRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}
}
