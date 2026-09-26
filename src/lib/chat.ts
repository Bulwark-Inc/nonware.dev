import { GoogleAuth } from "google-auth-library";

const chatApiUrl = process.env.CHAT_API_URL;

if (!chatApiUrl) {
  throw new Error("CHAT_API_URL is not configured");
}

const auth = new GoogleAuth();

export async function sendChatMessage(message: string) {
  const client = await auth.getIdTokenClient(chatApiUrl);

  const response = await client.request({
    url: `${chatApiUrl}/chat`,
    method: "POST",
    data: {
      message,
    },
  });

  return response.data as {
    response: string;
  };
}