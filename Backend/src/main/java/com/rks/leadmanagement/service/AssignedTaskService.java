package com.rks.leadmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rks.leadmanagement.model.AssignedTask;
import com.rks.leadmanagement.repository.AssignedTaskRepository;

import java.util.List;

@Service
public class AssignedTaskService {

    private final AssignedTaskRepository assignedTaskRepository;

    @Autowired
    public AssignedTaskService(AssignedTaskRepository assignedTaskRepository) {
        this.assignedTaskRepository = assignedTaskRepository;
    }

    public void saveTasks(List<AssignedTask> tasks) {
        assignedTaskRepository.saveAll(tasks);
    }

    public List<AssignedTask> getAllTasks() {
        return assignedTaskRepository.findAll();
    }
}
