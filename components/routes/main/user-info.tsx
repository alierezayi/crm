"use client";

import { useBasicAnalyze } from "@/context/basic-analyze-context";
import { UserIcon } from "lucide-react";

export default function UserInfo() {
  const { data, isLoading, error } = useBasicAnalyze();

  const userData = data?.user;

  return (
    <div className="mb-5 flex items-center mt-5">
      <div className="px-3 py-2 rounded-full bg-slate-200 dark:bg-gray-800 w-fit h-fit">
        <UserIcon className="w-4" />
      </div>
      {isLoading ? (
        <div className="ml-5">Loading . . .</div>
      ) : (
        <>
          {error ? (
            <div className="ml-5">Error fetching user data</div>
          ) : (
            <div className="ml-5 text-xs flex-1">
              <p>{userData?.name}</p>
              <div className="flex gap-5 w-full">
                <p className="text-gray-500">{userData?.eMail}</p>
                <span className="text-blue-500">{userData?.login}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
