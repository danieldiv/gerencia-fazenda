package com.faculdade.fazenda.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faculdade.fazenda.api.model.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long> {

}
