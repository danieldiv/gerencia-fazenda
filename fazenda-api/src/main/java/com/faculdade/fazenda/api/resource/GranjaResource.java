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
import com.faculdade.fazenda.api.model.Granja;
import com.faculdade.fazenda.api.repository.GranjaRepository;
import com.faculdade.fazenda.api.service.GranjaService;

@RestController
@RequestMapping("/granjas")
public class GranjaResource {

	@Autowired
	private GranjaRepository granjaRepository;
	
	@Autowired
	private GranjaService granjaService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_GRANJA') and hasAuthority('SCOPE_read')" )
	public List<Granja> listar() {
		return this.granjaRepository.findAll();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_GRANJA') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Granja> criar(@Valid @RequestBody Granja granja, HttpServletResponse response) {
		Granja granjaSalva = this.granjaService.salvar(granja);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, granjaSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(granjaSalva);
	}
//
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_GRANJA') and hasAuthority('SCOPE_read')" )
	public ResponseEntity<Granja> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Granja> granja = this.granjaRepository.findById(codigo);
		return granja.isPresent() ? ResponseEntity.ok(granja.get()) : ResponseEntity.notFound().build();
	}
//
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_GRANJA') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Granja> atualizar(@PathVariable Long codigo, @Valid @RequestBody Granja granja) {
		Granja granjaSalva= this.granjaService.atualizar(codigo, granja);
		return ResponseEntity.ok(granjaSalva);
	}
//
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_GRANJA') and hasAuthority('SCOPE_write')" )
	public void remover(@PathVariable Long codigo) {
		this.granjaRepository.deleteById(codigo);
	}
}
