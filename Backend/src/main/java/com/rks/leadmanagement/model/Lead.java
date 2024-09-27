package com.rks.leadmanagement.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "newleads")
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("UNIQUE_QUERY_ID")
    private String uniqueQueryId;

    @JsonProperty("QUERY_TYPE")
    private String queryType;

    @JsonProperty("QUERY_TIME")
    private String queryTime;

    @JsonProperty("SENDER_NAME")
    private String senderName;

    @JsonProperty("SENDER_MOBILE")
    private String senderMobile;

    @JsonProperty("SENDER_EMAIL")
    private String senderEmail;

    @JsonProperty("SUBJECT")
    private String subject;

    @JsonProperty("SENDER_COMPANY")
    private String senderCompany;

    @JsonProperty("SENDER_ADDRESS")
    @Column(length = 255)
    private String senderAddress;

    @JsonProperty("SENDER_CITY")
    @Column(length = 255)
    private String senderCity;

    @JsonProperty("SENDER_STATE")
    private String senderState;

    @JsonProperty("SENDER_PINCODE")
    private String senderPincode;

    @JsonProperty("SENDER_COUNTRY_ISO")
    private String senderCountryIso;

    @JsonProperty("QUERY_PRODUCT_NAME")
    private String queryProductName;

    @JsonProperty("QUERY_MESSAGE")
    @Column(length = 5000)
    private String queryMessage;

    @JsonProperty("QUERY_MCAT_NAME")
    private String queryMcatName;

    @JsonProperty("CALL_DURATION")
    private String callDuration;

    @JsonProperty("RECEIVER_MOBILE")
    private String receiverMobile;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUniqueQueryId() {
        return uniqueQueryId;
    }

    public void setUniqueQueryId(String uniqueQueryId) {
        this.uniqueQueryId = uniqueQueryId;
    }

    public String getQueryType() {
        return queryType;
    }

    public void setQueryType(String queryType) {
        this.queryType = queryType;
    }

    public String getQueryTime() {
        return queryTime;
    }

    public void setQueryTime(String queryTime) {
        this.queryTime = queryTime;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getSenderMobile() {
        return senderMobile;
    }

    public void setSenderMobile(String senderMobile) {
        this.senderMobile = senderMobile;
    }

    public String getSenderEmail() {
        return senderEmail;
    }

    public void setSenderEmail(String senderEmail) {
        this.senderEmail = senderEmail;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getSenderCompany() {
        return senderCompany;
    }

    public void setSenderCompany(String senderCompany) {
        this.senderCompany = senderCompany;
    }

    public String getSenderAddress() {
        return senderAddress;
    }

    public void setSenderAddress(String senderAddress) {
        this.senderAddress = senderAddress;
    }

    public String getSenderCity() {
        return senderCity;
    }

    public void setSenderCity(String senderCity) {
        this.senderCity = senderCity;
    }

    public String getSenderState() {
        return senderState;
    }

    public void setSenderState(String senderState) {
        this.senderState = senderState;
    }

    public String getSenderPincode() {
        return senderPincode;
    }

    public void setSenderPincode(String senderPincode) {
        this.senderPincode = senderPincode;
    }

    public String getSenderCountryIso() {
        return senderCountryIso;
    }

    public void setSenderCountryIso(String senderCountryIso) {
        this.senderCountryIso = senderCountryIso;
    }

    public String getQueryProductName() {
        return queryProductName;
    }

    public void setQueryProductName(String queryProductName) {
        this.queryProductName = queryProductName;
    }

    public String getQueryMessage() {
        return queryMessage;
    }

    public void setQueryMessage(String queryMessage) {
        this.queryMessage = queryMessage;
    }

    public String getQueryMcatName() {
        return queryMcatName;
    }

    public void setQueryMcatName(String queryMcatName) {
        this.queryMcatName = queryMcatName;
    }

    public String getCallDuration() {
        return callDuration;
    }

    public void setCallDuration(String callDuration) {
        this.callDuration = callDuration;
    }

    public String getReceiverMobile() {
        return receiverMobile;
    }

    public void setReceiverMobile(String receiverMobile) {
        this.receiverMobile = receiverMobile;
    }
}
