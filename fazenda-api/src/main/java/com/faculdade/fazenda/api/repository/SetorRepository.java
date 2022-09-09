package com.faculdade.fazenda.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faculdade.fazenda.api.model.Setor;

public interface SetorRepository extends JpaRepository<Setor, Long> {

	public Optional<Setor> findByDescricao(String descricao);
}
