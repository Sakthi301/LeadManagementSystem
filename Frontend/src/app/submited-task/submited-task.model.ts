export interface SubmitedTask {
  id: number;
  executiveName: string;
  assignedDate: string;
  assignedTime: string;
  uniqueQueryId: string;
  queryType: string;
  queryTime: string;
  senderName: string;
  senderMobile: string;
  senderEmail: string;
  subject: string;
  senderCompany: string;
  senderAddress: string;
  senderCity: string;
  senderState: string;
  senderPincode: string;
  senderCountryIso: string;
  queryProductName: string;
  queryMessage: string;
  queryMcatName: string;
  callDuration: string;
  receiverMobile: string;
}
