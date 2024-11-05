import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { Button } from "@/components/ui/button";
import { CameraOff } from "lucide-react";
import { useEffect, useState } from "react";

export const SetUpMeeting = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isCamMicToggled, setIsCamMicToggled] = useState(false);

  const call = useCall();
  if (!call) {
    console.log("useStreamCall must be used within a StreamCall comp.");
    return;
  }
  useEffect(() => {
    //   async function fetchMeeting(id: string): Promise<Meeting> {
    //     const meetings = await noKopyApi.get(`/meetings/${id}`);
    //     const response: Meeting = meetings.data;
    //     return response;
    //   }
    //   fetchMeeting(meetingId);
  }, []);
  
  useEffect(() => {
    if (isCamMicToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isCamMicToggled, call.camera, call.microphone]);

  //   if (callTimeNotArrived) {
  //     return (
  //       <div>
  //         <span>
  //           Your Meeting has not started yet. It is scheduled for{" "}
  //           {callStartAt.toLocaleString()}
  //         </span>
  //       </div>
  //     );
  //   }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="font-montserrat text-2xl mb-4">SetUp</h1>
      <VideoPreview DisabledVideoPreview={DisabledVideoPreview} />

      <label className="flex gap-4 my-2">
        <input
          type="checkbox"
          checked={isCamMicToggled}
          onChange={() => setIsCamMicToggled((prev) => !prev)}
        />
        Join with camera and mic off
      </label>
      <DeviceSettings />
      <Button
        className="rounded-md bg-NKGreen-500 hover:bg-NKGreen-400 px-4 py-2.5"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

const DisabledVideoPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col p-8 bg-zinc-600 rounded-xl gap-4">
      <CameraOff />
      <p className="font-firaSans">Camera and microphone disabled</p>
    </div>
  );
};
