"use client";

import { useEffect, useState } from "react";
import { ProjectWithMatchingScore } from "@/app/types";
import { getApiHostUrl } from "@/app/utils";

export default function Home() {
  // API address:
  // fetch(`${getApiHostUrl()}/matching_projects/1`);

  return (
    <main className="flex min-h-screen max-w-7xl flex-col p-24 m-auto">
      <h1 className="mb-3 text-4xl font-semibold w-full mb-16">
        Your matching projects
      </h1>
      <div className="w-full flex flex-col gap-6">
        <div className="grid grid-cols-4 w-full gap-8 backdrop-blur-2xl rounded-xl border border-zinc-200 bg-zinc-100 p-4 hover:border-blue-200">
          <div className="col-span-3">
            <h2 className="font-semibold text-lg">Project Name</h2>
            <p>Project description</p>
            <button className="rounded-xl border-red-200 bg-red-500 text-white px-4 py-2 mt-4">Dismiss</button>
          </div>
          <div className="col-span-1 space-y-2">
            <p className="text-3xl">£X</p>
            <p className="text-sm">
              Score: Y
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="rounded-xl border-green-200 bg-green-500 text-white px-4 py-2 mt-4"
        >
          Show hidden projects
        </button>
      </div>
    </main>
  );
}
