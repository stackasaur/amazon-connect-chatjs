//Placeholder
export const CHAT_CONFIGURATIONS = {
  CONCURRENT_CHATS: 10
};

export const PARTICIPANT_TOKEN_HEADER = "x-amzn-connect-participant-token";
export const AUTH_HEADER = "X-Amz-Bearer";

export const RESOURCE_PATH = {
  CONNECTION_DETAILS: "/contact/chat/participant/connection-details",
  MESSAGE: "/participant/message",
  TRANSCRIPT: "/participant/transcript",
  EVENT: "/participant/event",
  DISCONNECT: "/participant/disconnect",
  PARTICIPANT_CONNECTION: "/participant/connection",
  ATTACHMENT: "/participant/attachment"
};

export const SESSION_TYPES = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER"
};

export const CHAT_EVENTS = {
  INCOMING_MESSAGE: "INCOMING_MESSAGE",
  INCOMING_TYPING: "INCOMING_TYPING",
  CONNECTION_ESTABLISHED: "CONNECTION_ESTABLISHED",
  CONNECTION_LOST: "CONNECTION_LOST",
  CONNECTION_BROKEN: "CONNECTION_BROKEN",
  CONNECTION_ACK: "CONNECTION_ACK",
  CHAT_ENDED: "CHAT_ENDED"
};

export const CONTENT_TYPE = {
  textPlain: "text/plain",
  textMarkdown: "text/markdown",
  textCsv: "text/csv",
  applicationDoc: "application/msword",
  applicationDocx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  applicationPdf: "application/pdf",
  applicationPpt: "application/vnd.ms-powerpoint",
  applicationPptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  applicationXls: "application/vnd.ms-excel",
  applicationXlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  imageJpg: "image/jpeg",
  imagePng: "image/png",
  audioWav: "audio/wav",
  audioXWav: "audio/x-wav", //Firefox
  audioVndWave: "audio/vnd.wave", //IE
  connectionAcknowledged: "application/vnd.amazonaws.connect.event.connection.acknowledged",
  typing: "application/vnd.amazonaws.connect.event.typing",
  participantJoined: "application/vnd.amazonaws.connect.event.participant.joined",
  participantLeft: "application/vnd.amazonaws.connect.event.participant.left",
  participantActive: "application/vnd.amazonaws.connect.event.participant.active",
  participantInactive: "application/vnd.amazonaws.connect.event.participant.inactive",
  transferSucceeded: "application/vnd.amazonaws.connect.event.transfer.succeeded",
  transferFailed: "application/vnd.amazonaws.connect.event.transfer.failed",
  chatEnded: "application/vnd.amazonaws.connect.event.chat.ended",
  interactiveMessage: "application/vnd.amazonaws.connect.message.interactive"
};

export const EVENT = "EVENT";
export const MESSAGE = "MESSAGE";

export const TRANSCRIPT_DEFAULT_PARAMS = {
  MAX_RESULTS: 15,
  SORT_ORDER: "ASCENDING",
  SCAN_DIRECTION: "BACKWARD"
};

export const LOGS_DESTINATION = {
  NULL: "NULL",
  CLIENT_LOGGER: "CLIENT_LOGGER",
  DEBUG: "DEBUG"
};

export const REGIONS = {
  pdx: "us-west-2",
  iad: "us-east-1",
  syd: "ap-southeast-2",
  nrt: "ap-northeast-1",
  fra: "eu-central-1",
  pdt: "us-gov-west-1",
  yul: "ca-central-1",
  icn: "ap-northeast-2",
  cpt: "af-south-1"
};

export const AGENT_RECONNECT_CONFIG = {
  interval: 3000,
  maxRetries: 5
};

export const CUSTOMER_RECONNECT_CONFIG = {
  interval: 3000,
  maxRetries: 5
};

export const CONNECTION_TOKEN_POLLING_INTERVAL_IN_MS = 1000 * 60 * 60 * 12; // 12 hours

export const CONNECTION_TOKEN_EXPIRY_BUFFER_IN_MS = 60 * 1000; //1 min

export const TRANSPORT_LIFETIME_IN_SECONDS = 3540; // 59 mins
