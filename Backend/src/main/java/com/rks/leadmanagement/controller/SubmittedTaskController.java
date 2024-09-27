package com.rks.leadmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rks.leadmanagement.model.SubmittedTask;
import com.rks.leadmanagement.service.SubmittedTaskService;


@RestController
@RequestMapping("/api/submitted-tasks")
@CrossOrigin(origins = "http://localhost:4200")
public class SubmittedTaskController {

    @Autowired
    private SubmittedTaskService submittedTaskService;

    @GetMapping
    public ResponseEntity<List<SubmittedTask>> getAllSubmittedTasks() {
        List<SubmittedTask> submittedTasks = submittedTaskService.getAllSubmittedTasks();
        return ResponseEntity.ok(submittedTasks);
    }

    @PostMapping
    public ResponseEntity<List<SubmittedTask>> saveSubmittedTasks(@RequestBody List<SubmittedTask> submittedTasks) {
        try {
            List<SubmittedTask> savedTasks = submittedTaskService.saveSubmittedTasks(submittedTasks);
            return ResponseEntity.ok(savedTasks);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
