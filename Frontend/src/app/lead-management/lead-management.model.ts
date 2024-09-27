export class Lead {
  id: number = 0; // Auto-incremented primary key
  UNIQUE_QUERY_ID: string = '';
  QUERY_TYPE: string = '';
  QUERY_TIME: string = '';
  SENDER_NAME: string = '';
  SENDER_MOBILE: string = '';
  SENDER_EMAIL: string = '';
  SUBJECT: string = '';
  SENDER_COMPANY: string = '';
  SENDER_ADDRESS: string = '';
  SENDER_CITY: string = '';
  SENDER_STATE: string = '';
  SENDER_PINCODE: string = '';
  SENDER_COUNTRY_ISO: string = '';
  QUERY_PRODUCT_NAME: string = '';
  QUERY_MESSAGE: string = '';
  QUERY_MCAT_NAME: string = '';
  CALL_DURATION: string = '';
  RECEIVER_MOBILE: string = '';
  selected?: boolean;
}
