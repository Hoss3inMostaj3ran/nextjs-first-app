import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Prop {
  searchParams: { sort_order: string };
}

const UsersPage = ({ searchParams: { sort_order } }: Prop) => {
  return (
    <div>
      <h1 className="mb-5 mt-3">UsersPage: </h1>
      <Link
        className="btn bg-slate-800 text-gray-300 mb-3
      hover:bg-slate-900"
        href="/users/new"
      >
        Create New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sort_order={sort_order} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
