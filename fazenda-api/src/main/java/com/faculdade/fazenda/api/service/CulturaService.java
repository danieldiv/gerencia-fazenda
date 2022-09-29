package com.faculdade.fazenda.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Cultura;
import com.faculdade.fazenda.api.repository.CulturaRepository;

@Service
public class CulturaService {

	@Autowired
	private CulturaRepository culturaRepository;

	public Cultura atualizar(Long codigo, Cultura cultura) {
		Cultura culturaSalva = buscarCulturaPeloCodigo(codigo);
		BeanUtils.copyProperties(cultura, culturaSalva, "codigo");
		return this.culturaRepository.save(culturaSalva);
	}

	private Cultura buscarCulturaPeloCodigo(Long codigo) {
		return this.culturaRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}
}
