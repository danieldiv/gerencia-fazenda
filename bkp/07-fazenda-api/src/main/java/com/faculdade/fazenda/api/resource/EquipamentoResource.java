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
import com.faculdade.fazenda.api.model.Equipamento;
import com.faculdade.fazenda.api.repository.EquipamentoRepository;
import com.faculdade.fazenda.api.service.EquipamentoService;

@RestController
@RequestMapping("/equipamentos")
public class EquipamentoResource {

	@Autowired
	private EquipamentoRepository equipamentoRepository;
	
	@Autowired
	private EquipamentoService equipamentoService;
	
	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_EQUIPAMENTO') and hasAuthority('SCOPE_read')" )
	public List<Equipamento> listar() {
		return this.equipamentoRepository.findAll();
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EQUIPAMENTO') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Equipamento> criar(@Valid @RequestBody Equipamento equipamento, HttpServletResponse response) {
		Equipamento equipamentoSalvo = this.equipamentoRepository.save(equipamento);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, equipamentoSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(equipamentoSalvo);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_EQUIPAMENTO') and hasAuthority('SCOPE_read')" )
	public ResponseEntity<Equipamento> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Equipamento> equipamento = this.equipamentoRepository.findById(codigo);
		return equipamento.isPresent() ? ResponseEntity.ok(equipamento.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EQUIPAMENTO') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Equipamento> atualizar(@PathVariable Long codigo, @Valid @RequestBody Equipamento equipamento) {
		Equipamento equipamentoSalvo = this.equipamentoService.atualizar(codigo, equipamento);
		return ResponseEntity.ok(equipamentoSalvo);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EQUIPAMENTO') and hasAuthority('SCOPE_write')" )
	public void remover(@PathVariable Long codigo) {
		this.equipamentoRepository.deleteById(codigo);
	}
}
