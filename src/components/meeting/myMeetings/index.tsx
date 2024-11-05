import { noKopyApi } from "@/lib/api";
import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { getLocale, getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Unplug, CalendarClock, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card/card";
import { Link } from "@/navigation";
import { Meeting } from "./main";

async function getMeetings(): Promise<Meeting[]> {
  const cookie = cookies().get("nokopy.token")?.value;
  const meetings = await noKopyApi.get("/meetings/client", {
    headers: { Authorization: `Bearer ${cookie}` },
  });
  const response: Meeting[] = meetings.data;

  if (!response) notFound();
  return response;
}

export const MyMeetings = async () => {
  const meetings = await getMeetings();
  const lang = await getLocale();
  const t = await getTranslations("dashboard.myMeetings");

  const statusValidation = {
    Booked: () => (
      <CalendarClock
        strokeWidth={1}
        className="text-yellow-400 size-[1.20rem]"
      />
    ),
    InLive: () => (
      <Radio
        strokeWidth={1}
        className="text-NKGreen-400 size-[1.20rem] animate-pulse"
      />
    ),
    Finished: () => (
      <Unplug strokeWidth={1} className="text-red-700 size-[1.20rem]" />
    ),
    Canceled: () => <p>da</p>,
  };
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      {meetings.map((item, idx) => (
        <Card key={idx} variant="meeting" size="meeting">
          <div className="w-full h-full relative">
            <span className="font-firaSans absolute top-1 left-1">
              {t("topic")}
            </span>
            <span className="absolute bottom-1 right-1 bg-background p-2 rounded-full">
              {statusValidation[item.status]()}
            </span>
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="meeting"
            />
          </div>

          <div className="font-montserrat">
            <h3 className="text-base">{item.topic}</h3>
            <span className="text-sm">
              <p>
                {format(item.startAt, "PPP", {
                  locale: lang === "en" ? enUS : ptBR,
                })}
              </p>
              <p>{item.hour}</p>
            </span>
          </div>
          <Link href={`/dashboard/meetings/${item.meetindId}?meeting=${item.id}`} className="w-full">
            <Button
              className="bg-NKGreen-500 hover:bg-NKGreen-400 h-9 font-firaSans font-bold -tracking-tighter text-sm uppercase rounded-md w-full"
              disabled={
                item.status === "Canceled" || item.status === "Finished"
              }
            >
              {t("button")}
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
};
