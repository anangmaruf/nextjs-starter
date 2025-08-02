"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { Toaster } from "sonner";

interface AdminLyoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLyoutProps> = ({ children }) => {
  return (
    <main className="admin">
      <Toaster />
      {children}
    </main>
  );
};

export default AdminLayout;
