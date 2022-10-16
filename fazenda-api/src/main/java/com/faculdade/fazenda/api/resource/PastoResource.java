package com.faculdade.fazenda.api.resource;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.event.RecursoCriadoEvent;
import com.faculdade.fazenda.api.exceptionhandler.FazendaExceptionHandler.Erro;
import com.faculdade.fazenda.api.model.Pasto;
import com.faculdade.fazenda.api.repository.PastoRepository;
import com.faculdade.fazenda.api.service.PastoService;
import com.faculdade.fazenda.api.service.exception.AnimalNaoPermitidoException;
import com.faculdade.fazenda.api.service.exception.CapacidadeSuperiorException;
//import com.faculdade.fazenda.api.service.exception.SetorExistenteException;

@RestController
@RequestMapping("/pastos")
public class PastoResource {

	@Autowired
	private PastoRepository pastoRepository;

	@Autowired
	private PastoService pastoService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@Autowired
	private MessageSource messageSource;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PASTO') and hasAuthority('SCOPE_read')" )
	public List<Pasto> listar() {
		return this.pastoRepository.findAll();
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PASTO') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Pasto> criar(@Valid @RequestBody Pasto pasto, HttpServletResponse response) {
		Pasto pastoSalvo = this.pastoService.salvar(pasto);
		this.publisher.publishEvent(new RecursoCriadoEvent(this, response, pastoSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(pastoSalvo);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PASTO') and hasAuthority('SCOPE_read')" )
	public ResponseEntity<Pasto> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Pasto> pasto = this.pastoRepository.findById(codigo);
		return pasto.isPresent() ? ResponseEntity.ok(pasto.get()) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PASTO') and hasAuthority('SCOPE_write')" )
	public ResponseEntity<Pasto> atualizar(@PathVariable Long codigo, @Valid @RequestBody Pasto pasto) {
		Pasto pastoSalvo = this.pastoService.atualizar(codigo, pasto);
		return ResponseEntity.ok(pastoSalvo);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PASTO') and hasAuthority('SCOPE_write')" )
	public void remover(@PathVariable Long codigo) {
		this.pastoRepository.deleteById(codigo);
	}
	
	@ExceptionHandler({ CapacidadeSuperiorException.class })
	public ResponseEntity<Object> handleCapacidadeSuperiorException(CapacidadeSuperiorException ex) {
		String mensagemUsuario = this.messageSource.getMessage("pasto.quantidade-nao-permitida", null,
				LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ex.toString();

		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		return ResponseEntity.badRequest().body(erros);
	}

	@ExceptionHandler({ AnimalNaoPermitidoException.class })
	public ResponseEntity<Object> handleAnimalNaoPermitidoException(AnimalNaoPermitidoException ex) {
		String mensagemUsuario = this.messageSource.getMessage("pasto.animal-nao-permitido", null,
				LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ex.toString();

		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		return ResponseEntity.badRequest().body(erros);
	}
}
