package com.rks.leadmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rks.leadmanagement.model.AssignedTask;

@Repository
public interface AssignedTaskRepository extends JpaRepository<AssignedTask, Long> {
}
