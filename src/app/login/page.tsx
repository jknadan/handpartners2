"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "src/actions/user-actions";
import Image from "next/image";

import { Checkbox } from "@material-tailwind/react";
import Login from "./_components/Login";

export default function Page() {
  const userQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return (
    <div className="flex w-full h-full justify-center items-center bg-blue-gray-50">
      <Login />
    </div>
  );
}
