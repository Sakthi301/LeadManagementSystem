package com.rks.leadmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rks.leadmanagement.model.Lead;
import com.rks.leadmanagement.repository.LeadRepository;
import com.rks.leadmanagement.service.LeadService;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = "http://localhost:4200")
public class LeadController {

	
	 private final LeadService leadService;
	    private final LeadRepository leadRepository;

	    @Autowired
	    public LeadController(LeadService leadService, LeadRepository leadRepository) {
	        this.leadService = leadService;
	        this.leadRepository = leadRepository;
	    }

	    @GetMapping("/fetch")
	    public String fetchLeads() {
	        leadService.fetchAndSaveLeads();
	        return "Leads fetched and processed";
	    }
	 // Get data from database
	    @GetMapping
	    public List<Lead> getLeads() {
	        return leadService.getAllLeads();
	    }
	    
	}