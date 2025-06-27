package com.exemplo.financas_jpa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exemplo.financas_jpa.model.Conta;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {
}
