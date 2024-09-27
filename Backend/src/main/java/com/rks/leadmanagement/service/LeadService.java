package com.rks.leadmanagement.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.rks.leadmanagement.model.Lead;
import com.rks.leadmanagement.repository.LeadRepository;

@Service
public class LeadService {

    private final IndiaMartApiClient indiaMartApiClient;
    private final RestTemplate restTemplate;
    private final LeadRepository leadRepository;

    @Autowired
    public LeadService(IndiaMartApiClient indiaMartApiClient, RestTemplate restTemplate, LeadRepository leadRepository) {
        this.indiaMartApiClient = indiaMartApiClient;
        this.restTemplate = restTemplate;
        this.leadRepository = leadRepository;
    }

    // Fetch and save leads from IndiaMART API
    public void fetchAndSaveLeads() {
        try {
            List<Lead> leads = fetchLeadsFromIndiaMART();
            if (!leads.isEmpty()) {
                leadRepository.saveAll(leads);
                System.out.println(leads.size() + " leads saved to the database.");
            } else {
                System.out.println("No leads to save.");
            }
        } catch (Exception e) {
            System.err.println("An error occurred while fetching leads: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // Retrieve all leads from the database
    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    // Fetch leads from IndiaMART API and map them to Lead entities
    private List<Lead> fetchLeadsFromIndiaMART() throws IOException {
        // URL of the IndiaMART API endpoint
        String url = "";

        // Make the API call
        String jsonResponse = restTemplate.getForObject(url, String.class);

        if (jsonResponse != null) {
            // Parse the JSON response and map it to Lead entities
            return indiaMartApiClient.fetchLeads(jsonResponse);
        } else {
            System.out.println("No data received from API.");
            return List.of(); // Return an empty list if the response is null
        }
    }
}
