package com.faculdade.fazenda.api.service;

import java.time.LocalDate;
import java.time.Period;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faculdade.fazenda.api.model.Funcionario;
import com.faculdade.fazenda.api.repository.FuncionarioRepository;
import com.faculdade.fazenda.api.service.exception.DataNaoPermitidaException;

@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;

	public Funcionario salvar(Funcionario funcionario) {
		validarFuncionario(funcionario);
		funcionario.setDataCadastro(LocalDate.now());
		return this.funcionarioRepository.save(funcionario);
	}

	private void validarFuncionario(Funcionario funcionario) {
		Period period = Period.between(funcionario.getDataNascimento(), LocalDate.now());

		if (period.getYears() < 18) {
			throw new DataNaoPermitidaException();
		}
	}

}
