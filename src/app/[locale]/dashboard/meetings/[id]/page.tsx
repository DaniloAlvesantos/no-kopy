"use client";
import { SetUpMeeting } from "@/components/_sections/meeting/setup";
import { Meeting } from "@/components/meeting/myMeetings/main";
import { StreamProvider, client } from "@/context/streamVideoContext";
import { useAuth } from "@/hooks/useAuth";
import { noKopyApi } from "@/lib/api";
import {
  StreamCall,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { user } = useAuth();

  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const call = client?.call("default", params.id);

  return (
    <>
      <StreamProvider>
        <StreamCall call={call}>
          <SetUpMeeting setIsSetupComplete={setIsSetupComplete} />
        </StreamCall>
      </StreamProvider>
    </>
  );
}

export const MyCallUI = () => {
  const call = useCall();
  const { useCallCallingState, useParticipants } = useCallStateHooks();

  const callingState = useCallCallingState();
  const participantes = useParticipants();
  return (
    <div>
      <div>Call: {call?.id}</div>
      <div>State: {callingState}</div>
      <div>Participantes: {participantes.length}</div>
      <button onClick={() => call?.leave()}>Sair</button>
    </div>
  );
};
