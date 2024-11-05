import { noKopyApi } from "@/lib/api";

export async function recoverInformations(token: string) {
  const response = await noKopyApi.get("/client/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if(!response.data) {
    console.error(response.status);
  }

  return response.data;
}
