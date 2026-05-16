import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
  collapsed={collapsed}
  onToggle={() => setCollapsed(!collapsed)}
/>

      <div className="flex flex-col flex-1">
        <Header onToggle={() => setCollapsed(!collapsed)} />

        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-950">
          {children}
        </main>
      </div>
    </div>
  );
}