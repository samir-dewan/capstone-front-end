const PORT = "http://localhost:5050";

//Profile APIs
export const GET_CONNECT_API_URL = `${PORT}/connect`;
export const GET_PROFILE_API_URL = `${PORT}/home`;
export const GET_CONNECTIONS_API_URL = (id) => `${PORT}/connect/${id}`;

//Chatroom API
export const GET_CHATROOMS_API_URL = (id) => `${PORT}/chat/${id}`;
export const GET_COMMENTS_API_URL = (personID, chatroomID) => `${PORT}/chat/${personID}/${chatroomID}`;

//Events API
export const GET_ATTENDEES_FOR_EVENT_API_URL = (id) => `${PORT}/events/${id}`;
export const GET_EVENTS_API_URL = `${PORT}/events`;