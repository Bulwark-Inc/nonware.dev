import { GoogleAuth } from "google-auth-library";

export type ContactRequest = {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
};

const auth = new GoogleAuth();

export async function sendContactMessage(data: ContactRequest) {
  const contactApiUrl = process.env.CHAT_API_URL;

  if (!contactApiUrl) {
    throw new Error("CHAT_API_URL is not configured");
  }

  const client = await auth.getIdTokenClient(contactApiUrl);

  const response = await client.request({
    url: `${contactApiUrl}/api/contact`,
    method: "POST",
    data,
  });

  return response.data as {
    success: boolean;
    message: string;
  };
}