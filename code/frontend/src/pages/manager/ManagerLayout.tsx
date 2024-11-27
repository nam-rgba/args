import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useSidebar } from "@/components/ui/sidebar";
import { BreadcrumbX } from "@/components/Breadcrumb";

export default function Layout() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <Header from="manager" />
      <div className="relative">
        <SidebarProvider open={isExpanded} onOpenChange={setIsExpanded}>
          <AppSidebar />
          <main className="min-h-screen w-full h-full relative">
            <CustomTrigger open={isExpanded} />
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}

const CustomTrigger = ({ open }: { open: boolean }) => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="w-full flex flex-row justify-start items-center sticky top-16">
      <button onClick={toggleSidebar} className=" my-2 mx-4 cursor-pointer">
        {open ? (
          <GoSidebarCollapse size={20} className="font-light" />
        ) : (
          <GoSidebarExpand size={20} />
        )}
      </button>
      {/* Breadcrumb */}
      <BreadcrumbX first="Home" second="Manager" dropdown={["Teams", "Profile", "Competitions"]} here={document.title.split(' - ')[0] || "Profile"}/>
    </div>
  );
};
