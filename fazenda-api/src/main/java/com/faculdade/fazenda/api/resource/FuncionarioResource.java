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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.event.RecursoCriadoEvent;
import com.faculdade.fazenda.api.model.Funcionario;
import com.faculdade.fazenda.api.repository.FuncionarioRepository;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioResource {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_FUNCIONARIO') and hasAuthority('SCOPE_read')" )
	public List<Funcionario> listar() {
		return this.funcionarioRepository.findAll();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_FUNCIONARIO') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Funcionario> criar(@Valid @RequestBody Funcionario funcionario, HttpServletResponse response) {
		Funcionario funcionarioSalvo = this.funcionarioRepository.save(funcionario);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, funcionarioSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(funcionarioSalvo);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_FUNCIONARIO') and hasAuthority('SCOPE_read')" )
	public ResponseEntity<Funcionario> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Funcionario> setor = this.funcionarioRepository.findById(codigo);
		return setor.isPresent() ? ResponseEntity.ok(setor.get()) : ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_SETOR') and hasAuthority('SCOPE_write')" )
	public void remover(@PathVariable Long codigo) {
		this.funcionarioRepository.deleteById(codigo);
	}
}
