import React from "react";
import Link from "next/link";
import { isValidDay } from "@/lib/guards";

export default function Button(props: { day: number }): JSX.Element {
  const day = props.day;
  if (isValidDay(day) === true) {
    return (
      <Link
        href={`/day/${day}`}
        className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-red-500 bg-white p-2 text-red-500 opacity-75 transition-all duration-500 hover:opacity-100"
      >
        {day}
      </Link>
    );
  } else {
    return (
      <div className="text-grey-500 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-dashed border-red-500 bg-white p-2 opacity-25 duration-500">
        {day}
      </div>
    );
  }
}
