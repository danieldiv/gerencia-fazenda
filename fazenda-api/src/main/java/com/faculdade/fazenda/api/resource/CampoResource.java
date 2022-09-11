package com.faculdade.fazenda.api.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.faculdade.fazenda.api.model.Campo;
import com.faculdade.fazenda.api.repository.CampoRepository;
import com.faculdade.fazenda.api.service.CampoService;

@RestController
@RequestMapping("/campos")
public class CampoResource {

	@Autowired
	private CampoRepository campoRepository;

	@Autowired
	private CampoService campoService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	public List<Campo> listar() {
		return this.campoRepository.findAll();
	}

	@PostMapping
	public ResponseEntity<Campo> criar(@Valid @RequestBody Campo campo, HttpServletResponse response) {
		Campo campoSalvo = this.campoRepository.save(campo);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, campoSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(campoSalvo);
	}

	@GetMapping("/{codigo}")
	public ResponseEntity<Campo> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Campo> campo = this.campoRepository.findById(codigo);
		return campo.isPresent() ? ResponseEntity.ok(campo.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	public ResponseEntity<Campo> atualizar(@PathVariable Long codigo, @Valid @RequestBody Campo campo) {
		Campo campoSalvo = this.campoService.atualizar(codigo, campo);
		return ResponseEntity.ok(campoSalvo);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		this.campoRepository.deleteById(codigo);
	}
}
