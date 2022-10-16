package com.faculdade.fazenda.api.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.event.RecursoCriadoEvent;
import com.faculdade.fazenda.api.model.Animal;
import com.faculdade.fazenda.api.repository.AnimalRepository;
import com.faculdade.fazenda.api.service.AnimalService;

@RestController
@RequestMapping("/animais")
public class AnimalResource {

	@Autowired
	private AnimalRepository animalRepository;

	@Autowired
	private ApplicationEventPublisher publisher;

	@Autowired
	private AnimalService animalService;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_ANIMAL') and hasAuthority('SCOPE_read')" )
	public List<Animal> listar() {
		return this.animalRepository.findAll();
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ANIMAL') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Animal> criar(@Valid @RequestBody Animal animal, HttpServletResponse response) {
		Animal animalSalvo = this.animalRepository.save(animal);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, animalSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(animalSalvo);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_ANIMAL') and hasAuthority('SCOPE_read')" )
	public ResponseEntity<Animal> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Animal> animal = this.animalRepository.findById(codigo);
		return animal.isPresent() ? ResponseEntity.ok(animal.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ANIMAL') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Animal> atualizar(@PathVariable Long codigo, @Valid @RequestBody Animal animal) {
		Animal animalSalvo = this.animalService.atualizar(codigo, animal);
		return ResponseEntity.ok(animalSalvo);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ANIMAL') and hasAuthority('SCOPE_write')" )
	public void remover(@PathVariable Long codigo) {
		this.animalRepository.deleteById(codigo);
	}
}
