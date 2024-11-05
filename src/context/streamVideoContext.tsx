"use client";
import { Loading } from "@/components/loading";
import { useAuth } from "@/hooks/useAuth";
import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_GETSTREAM_KEY;
export let client: StreamVideoClient | undefined = undefined;

export const StreamProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isAuthenticated } = useAuth();
  const clientUser: User = {
    id: user.id,
    name: user.name,
    type: user.role === "ADMIN" ? "authenticated" : "guest",
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    if (!apiKey) throw new Error("Stream API is Messing.");

    client = new StreamVideoClient({
      apiKey,
      user: clientUser,
    });

    setVideoClient(client);
  }, [user, isAuthenticated, children]);

  if (!videoClient) return <Loading />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};
