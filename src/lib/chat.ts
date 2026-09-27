import { GoogleAuth } from "google-auth-library";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export type ChatbotContext = {
  siteName: string;
  siteDescription: string;
  assistantPurpose: string;
  capabilities?: string[];
};

const chatApiUrl = process.env.CHAT_API_URL;

if (!chatApiUrl) {
  throw new Error("CHAT_API_URL is not configured");
}

const auth = new GoogleAuth();

export async function sendChatMessage(
  messages: Message[],
  context: ChatbotContext
) {
  const client = await auth.getIdTokenClient(chatApiUrl);

  const response = await client.request({
    url: `${chatApiUrl}/chat`,
    method: "POST",
    data: {
      messages,
      context,
    },
  });

  return response.data as {
    response: string;
  };
}