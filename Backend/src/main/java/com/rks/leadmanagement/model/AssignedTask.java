package com.rks.leadmanagement.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "assigned_tasks")
public class AssignedTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String executiveName;

    @Column(nullable = false)
    private String assignedTime;

    @Column(nullable = false)
    private String assignedDate;

    @Column
    private String uniqueQueryId;

    @Column
    private String queryType;

    @Column
    private String queryTime;

    @Column
    private String senderName;

    @Column
    private String senderMobile;

    @Column
    private String senderEmail;

    @Column
    private String subject;

    @Column
    private String senderCompany;

    @Column
    private String senderAddress;

    @Column
    private String senderCity;

    @Column
    private String senderState;

    @Column
    private String senderPincode;

    @Column
    private String senderCountryIso;

    @Column
    private String queryProductName;

    @Column
    private String queryMessage;

    @Column
    private String queryMcatName;

    @Column
    private String callDuration;

    @Column
    private String receiverMobile;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExecutiveName() {
        return executiveName;
    }

    public void setExecutiveName(String executiveName) {
        this.executiveName = executiveName;
    }

    public String getAssignedTime() {
        return assignedTime;
    }

    public void setAssignedTime(String assignedTime) {
        this.assignedTime = assignedTime;
    }

    public String getAssignedDate() {
        return assignedDate;
    }

    public void setAssignedDate(String assignedDate) {
        this.assignedDate = assignedDate;
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
