package com.faculdade.fazenda.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Campo;
import com.faculdade.fazenda.api.repository.CampoRepository;

@Service
public class CampoService {

	@Autowired
	private CampoRepository campoRepository;

	public Campo atualizar(Long codigo, Campo campo) {
		Campo campoSalvo = buscarCampoPeloCodigo(codigo);
		BeanUtils.copyProperties(campo, campoSalvo, "codigo");
		return this.campoRepository.save(campoSalvo);
	}

	private Campo buscarCampoPeloCodigo(Long codigo) {
		return this.campoRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}
}
