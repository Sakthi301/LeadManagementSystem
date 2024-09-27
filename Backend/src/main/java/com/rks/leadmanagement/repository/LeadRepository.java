package com.rks.leadmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rks.leadmanagement.model.Lead;

@Repository
public interface LeadRepository extends JpaRepository<Lead, Long> {
	
	
	
}