import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside
        className="w-auto h-full p-5
       bg-slate-300 mr-6"
      >
        Admin Sidebar
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
