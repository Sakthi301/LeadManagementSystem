package com.rks.leadmanagement.service;

import org.springframework.stereotype.Component;
import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rks.leadmanagement.model.Lead;
import com.rks.leadmanagement.model.LeadWrapper;

@Component
public class IndiaMartApiClient {

    private final ObjectMapper objectMapper;

    public IndiaMartApiClient(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public List<Lead> fetchLeads(String jsonResponse) throws IOException {
        // Deserialize JSON response to LeadWrapper
        LeadWrapper leadWrapper = objectMapper.readValue(jsonResponse, LeadWrapper.class);

        // You can perform some validation or logging based on the new fields
        if ("Success".equalsIgnoreCase(leadWrapper.getStatus()) && leadWrapper.getTotalRecords() > 0) {
            // Return the list of leads from the wrapper
            return leadWrapper.getResponse();
        } else {
            // Handle cases where the API did not return leads successfully
            System.out.println("Failed to fetch leads. Status: " + leadWrapper.getStatus() + ", Message: " + leadWrapper.getMessage());
            return List.of(); // Return an empty list if no leads were fetched
        }
    }
}
