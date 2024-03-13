export const backendEnpoint = import.meta.env.VITE_BACKEND_URL;

export const webSocketEndpoint = import.meta.env.VITE_SERVER_WEBSOCKET_URL;

export const backendAuthEnpoint = `${backendEnpoint}/api/user`;

export const backendBookEnpoint = `${backendEnpoint}/api/book`;

export const backendImageEndpoint = `${backendEnpoint}/images`;
