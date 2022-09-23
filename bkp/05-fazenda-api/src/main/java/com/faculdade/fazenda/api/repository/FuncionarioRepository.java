package com.faculdade.fazenda.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faculdade.fazenda.api.model.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {

}
