package com.rks.leadmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rks.leadmanagement.model.SubmittedTask;
import com.rks.leadmanagement.repository.SubmittedTaskRepository;


@Service
public class SubmittedTaskService {

    @Autowired
    private SubmittedTaskRepository submittedTaskRepository;

    public List<SubmittedTask> getAllSubmittedTasks() {
        return submittedTaskRepository.findAll();
    }

    public List<SubmittedTask> saveSubmittedTasks(List<SubmittedTask> submittedTasks) {
        return submittedTaskRepository.saveAll(submittedTasks);
    }
}
