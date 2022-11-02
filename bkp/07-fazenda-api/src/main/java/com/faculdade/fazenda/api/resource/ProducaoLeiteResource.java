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
import com.faculdade.fazenda.api.model.ProducaoLeite;
import com.faculdade.fazenda.api.repository.ProducaoLeiteRepository;
import com.faculdade.fazenda.api.service.ProducaoLeiteService;

@RestController
@RequestMapping("/producaoleite")
public class ProducaoLeiteResource {

	@Autowired
	private ProducaoLeiteRepository producaoLeiteRepository;

	@Autowired
	private ProducaoLeiteService producaoLeiteService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PRODUCAO_LEITE') and hasAuthority('SCOPE_read')")
	public List<ProducaoLeite> listar() {
		return this.producaoLeiteRepository.findAll();
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PRODUCAO_LEITE') and hasAuthority('SCOPE_write')")
	public ResponseEntity<ProducaoLeite> criar(@Valid @RequestBody ProducaoLeite ProducaoLeite,
			HttpServletResponse response) {
		ProducaoLeite ProducaoLeiteSalvo = this.producaoLeiteService.salvar(ProducaoLeite);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, ProducaoLeiteSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(ProducaoLeiteSalvo);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PRODUCAO_LEITE') and hasAuthority('SCOPE_read')")
	public ResponseEntity<ProducaoLeite> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<ProducaoLeite> producaoLeite = this.producaoLeiteRepository.findById(codigo);
		return producaoLeite.isPresent() ? ResponseEntity.ok(producaoLeite.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}/quantidade")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PRODUCAO_LEITE') and hasAuthority('SCOPE_write')")
	public void atualizar(@PathVariable Long codigo, @RequestBody int quantidade) {
		this.producaoLeiteService.atualizarPropridadeQuantidade(codigo, quantidade);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PRODUCAO_LEITE') and hasAuthority('SCOPE_write')")
	public void remover(@PathVariable Long codigo) {
		this.producaoLeiteRepository.deleteById(codigo);
	}
}
