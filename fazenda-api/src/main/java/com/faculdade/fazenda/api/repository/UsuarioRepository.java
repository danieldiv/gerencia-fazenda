package com.faculdade.fazenda.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faculdade.fazenda.api.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}