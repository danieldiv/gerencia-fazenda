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
import com.faculdade.fazenda.api.model.Ovos;
import com.faculdade.fazenda.api.repository.OvosRepository;
import com.faculdade.fazenda.api.service.OvosService;

@RestController
@RequestMapping("/ovos")
public class OvosResource {

	@Autowired
	private OvosRepository ovosRepository;

	@Autowired
	private OvosService ovosService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OVOS') and hasAuthority('SCOPE_read')")
	public List<Ovos> listar() {
		return this.ovosRepository.findAll();
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OVOS') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Ovos> criar(@Valid @RequestBody Ovos ovos, HttpServletResponse response) {
		Ovos ovosSalvo = this.ovosService.salvar(ovos);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, ovosSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(ovosSalvo);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OVOS') and hasAuthority('SCOPE_read')")
	public ResponseEntity<Ovos> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Ovos> ovos = this.ovosRepository.findById(codigo);
		return ovos.isPresent() ? ResponseEntity.ok(ovos.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}/quantidade")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OVOS') and hasAuthority('SCOPE_write')")
	public void atualizar(@PathVariable Long codigo, @RequestBody int quantidade) {
		this.ovosService.atualizarPropridadeQuantidade(codigo, quantidade);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_SETOR') and hasAuthority('SCOPE_write')")
	public void remover(@PathVariable Long codigo) {
		this.ovosRepository.deleteById(codigo);
	}
}
