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
import com.faculdade.fazenda.api.model.Cultura;
import com.faculdade.fazenda.api.repository.CulturaRepository;
import com.faculdade.fazenda.api.service.CulturaService;

@RestController
@RequestMapping("/culturas")
public class CulturaResource {

	@Autowired
	private CulturaRepository culturaRepository;
	
	@Autowired
	private CulturaService culturaService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	public List<Cultura> listar() {
		return this.culturaRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Cultura> criar(@Valid @RequestBody Cultura cultura, HttpServletResponse response) {
		Cultura culturaSalva = this.culturaRepository.save(cultura);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, culturaSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(culturaSalva);
	}

	@GetMapping("/{codigo}")
	public ResponseEntity<Cultura> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Cultura> cultura = this.culturaRepository.findById(codigo);
		return cultura.isPresent() ? ResponseEntity.ok(cultura.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	public ResponseEntity<Cultura> atualizar(@PathVariable Long codigo, @Valid @RequestBody Cultura cultura) {
		Cultura culturaSalva = this.culturaService.atualizar(codigo, cultura);
		return ResponseEntity.ok(culturaSalva);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		this.culturaRepository.deleteById(codigo);
	}
}
