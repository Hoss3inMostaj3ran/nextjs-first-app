import Link from "next/link";
import { sort } from "fast-sort";
import React from "react";

interface User {
  name: string;
  id: number;
  email: string;
}
interface Props {
  sort_order: string;
}

const UserTable = async ({ sort_order }: Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  const sortUsers = sort(users).asc(
    sort_order === "email" ? (u) => u.email : (u) => u.name
  );

  return (
    <div className="border-slate-500 border-2 rounded-lg p-1">
      <table className="table table-zebra table-md table-fixed ">
        <thead>
          <tr className="text-xl text-center font-light text-cyan-800 border-slate-500 border-b-2">
            <th>
              <Link href="/users?sort_order=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sort_order=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortUsers.map((user) => (
            <tr key={user.id} className="hover text-center">
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
