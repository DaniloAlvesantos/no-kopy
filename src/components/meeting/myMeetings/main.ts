export type Meeting = {
  id: string;
  meetingId: string;
  topic: string;
  startAt: string;
  hour: string;
  url: string;
  password: string;
  clientId: string;
  status: "Booked" | "InLive" | "Finished" | "Canceled";
};
