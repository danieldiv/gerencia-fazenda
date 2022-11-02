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
import com.faculdade.fazenda.api.model.Plantio;
import com.faculdade.fazenda.api.repository.PlantioRepository;
import com.faculdade.fazenda.api.service.PlantioService;

@RestController
@RequestMapping("/plantios")
public class PlantioResource {

	@Autowired
	private PlantioRepository plantioRepository;

	@Autowired
	private PlantioService plantioService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PLANTIO') and hasAuthority('SCOPE_read')")
	public List<Plantio> listar() {
		return this.plantioRepository.findAll();
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_SETOR') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Plantio> criar(@Valid @RequestBody Plantio plantio, HttpServletResponse response) {
		Plantio plantioSalvo = this.plantioService.salvar(plantio);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, plantioSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(plantioSalvo);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PLANTIO') and hasAuthority('SCOPE_read')")
	public ResponseEntity<Plantio> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Plantio> plantio = this.plantioRepository.findById(codigo);
		return plantio.isPresent() ? ResponseEntity.ok(plantio.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}/quantidade")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PLANTIO') and hasAuthority('SCOPE_write')")
	public void atualizarQuantidade(@PathVariable Long codigo, @RequestBody int quantidade) {
		this.plantioService.atualizarPropridadeQuantidade(codigo, quantidade);
	}
	
	@PutMapping("/{codigo}/situacao")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PLANTIO') and hasAuthority('SCOPE_write')")
	public void atualizarSituacao(@PathVariable Long codigo, @RequestBody Boolean situacao) {
		this.plantioService.atualizarPropridadeSituacao(codigo, situacao);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_SETOR') and hasAuthority('SCOPE_write')")
	public void remover(@PathVariable Long codigo) {
		this.plantioRepository.deleteById(codigo);
	}
}
