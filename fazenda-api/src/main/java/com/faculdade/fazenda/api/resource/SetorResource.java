package com.faculdade.fazenda.api.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculdade.fazenda.api.model.Setor;
import com.faculdade.fazenda.api.repository.SetorRepository;

@RestController
@RequestMapping("/setores")
public class SetorResource {

	@Autowired
	private SetorRepository setorRepository;

	@GetMapping
	public List<Setor> listar() {
		return this.setorRepository.findAll();
	}

	@PostMapping
	public ResponseEntity<Setor> criar(@Valid @RequestBody Setor setor, HttpServletResponse response) {
		Setor setorSalvo = this.setorRepository.save(setor);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(setorSalvo);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Setor> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Setor> setor = this.setorRepository.findById(codigo);
		
		return setor.isPresent() ? ResponseEntity.ok(setor.get()):ResponseEntity.notFound().build();
	}
}
