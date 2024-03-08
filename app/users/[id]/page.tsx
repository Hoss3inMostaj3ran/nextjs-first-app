"use client";
import React from "react";
import { notFound, useRouter } from "next/navigation";

interface Props {
  params: { id: number };
}
/*
const UserDetailsPage = ({ params }: Props) => {
  console.log(params);
  return <div>UserDetailsPage {params.id}</div>;
};
*/

// or

const UserDetailsPage = ({ params: { id } }: Props) => {
  if (id > 10) {
    notFound();
  }
  const router = useRouter();

  return (
    <div>
      <h1>UserDetailsPage {id}</h1>
      <br />
      <button
        onClick={() => router.push("/users")}
        className="btn btn-neutral my-3"
      >
        Back To Users
      </button>
    </div>
  );
};

export default UserDetailsPage;
