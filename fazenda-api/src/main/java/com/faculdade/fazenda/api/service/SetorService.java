package com.faculdade.fazenda.api.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Setor;
import com.faculdade.fazenda.api.repository.SetorRepository;
import com.faculdade.fazenda.api.service.exception.SetorExistenteException;

@Service
public class SetorService {

	@Autowired
	private SetorRepository setorRepository;

	public Setor salvar(Setor setor) {
		validarSetor(setor.getDescricao());
		return this.setorRepository.save(setor);
	}

	public Setor atualizar(Long codigo, Setor setor) {
		Setor setorSalvo = buscarSetorPeloCodigo(codigo);
		BeanUtils.copyProperties(setor, setorSalvo, "codigo");
		return this.setorRepository.save(setorSalvo);
	}

	private Setor buscarSetorPeloCodigo(Long codigo) {
		return this.setorRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
	}

	private void validarSetor(String descricao) {
		Optional<Setor> setorSalvo = this.setorRepository.findByDescricao(descricao);

		if (setorSalvo.isPresent()) {
			throw new SetorExistenteException();
		}
	}
}
