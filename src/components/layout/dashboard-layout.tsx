import { useState } from "react";
import SideBar from "./side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-container">
      <SideBar />

      <main className="page-container">{children}</main>
    </div>
  );
}
