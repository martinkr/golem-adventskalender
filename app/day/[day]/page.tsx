"use server";

import { readDatasetForDay } from "../../actions";
import Link from "next/link";
import { isValidDay, isValidMonth } from "@/lib/guards";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { day: string };
}): Promise<JSX.Element> {
  const day = Number(params.day);
  let dataset;

  if (isValidMonth(10) !== true || isValidDay(day) !== true) {
    redirect("/");
  }
  try {
    dataset = await readDatasetForDay(day);
  } catch (error) {
    redirect("/");
  }

  const url = `https://www.youtube-nocookie.com/embed/${dataset!.video}`;

  return (
    <div className=" ">
      <div className="fixed inset-x-0 inset-y-0 z-10 flex h-fit w-screen flex-wrap items-end bg-white p-4 text-base uppercase leading-none opacity-90 md:flex-nowrap">
        <Link
          href="/"
          className="flex items-center font-semibold text-slate-500 transition-all hover:text-gray-900"
        >
          <svg
            className="mr-2 ms-2 h-4 w-4 rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          Startseite
        </Link>
        <span className="pl-2 font-extrabold text-gray-900">
          {dataset!.title}
        </span>
      </div>
      <div>
        <iframe
          className="fixed inset-x-0 inset-y-0 z-0 h-full w-full"
          src={url}
          title={dataset!.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe>{" "}
      </div>
    </div>
  );
}
