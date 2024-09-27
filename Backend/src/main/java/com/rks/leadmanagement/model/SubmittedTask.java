package com.rks.leadmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "submitted_tasks")
public class SubmittedTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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
	public String getAssignedDate() {
		return assignedDate;
	}
	public void setAssignedDate(String assignedDate) {
		this.assignedDate = assignedDate;
	}
	public String getAssignedTime() {
		return assignedTime;
	}
	public void setAssignedTime(String assignedTime) {
		this.assignedTime = assignedTime;
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
	private String executiveName;
    private String assignedDate;
    private String assignedTime;
    private String uniqueQueryId;
    private String queryType;
    private String queryTime;
    private String senderName;
    private String senderMobile;
    private String senderEmail;
    private String subject;
    private String senderCompany;
    private String senderAddress;
    private String senderCity;
    private String senderState;
    private String senderPincode;
    private String senderCountryIso;
    private String queryProductName;
    private String queryMessage;
    private String queryMcatName;
    private String callDuration;
    private String receiverMobile;

    // Getters and Setters
}