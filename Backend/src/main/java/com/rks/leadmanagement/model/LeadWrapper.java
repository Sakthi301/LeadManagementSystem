package com.rks.leadmanagement.model;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LeadWrapper {

    @JsonProperty("CODE")
    private int code;

    @JsonProperty("STATUS")
    private String status;

    @JsonProperty("MESSAGE")
    private String message;

    @JsonProperty("TOTAL_RECORDS")
    private int totalRecords;

    @JsonProperty("RESPONSE")
    private List<Lead> response;

    // Getters and setters
    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getTotalRecords() {
        return totalRecords;
    }

    public void setTotalRecords(int totalRecords) {
        this.totalRecords = totalRecords;
    }

    public List<Lead> getResponse() {
        return response;
    }

    public void setResponse(List<Lead> response) {
        this.response = response;
    }
}
