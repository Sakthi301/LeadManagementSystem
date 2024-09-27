package com.rks.leadmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rks.leadmanagement.model.AssignedTask;
import com.rks.leadmanagement.service.AssignedTaskService;

import java.util.List;

@RestController
@RequestMapping("/api/assigned-tasks")
@CrossOrigin(origins = "http://localhost:4200")
public class AssignedTaskController {

    private final AssignedTaskService assignedTaskService;

    @Autowired
    public AssignedTaskController(AssignedTaskService assignedTaskService) {
        this.assignedTaskService = assignedTaskService;
    }

    @PostMapping
    public void assignTasks(@RequestBody List<AssignedTask> tasks) {
        assignedTaskService.saveTasks(tasks);
        System.out.println("Data saved successfully");
    }

    @GetMapping
    public List<AssignedTask> getAssignedTasks() {
        return assignedTaskService.getAllTasks();
    }
}
