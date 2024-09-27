package com.rks.leadmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rks.leadmanagement.model.SubmittedTask;

@Repository
public interface SubmittedTaskRepository extends JpaRepository<SubmittedTask, Long> {
	
}