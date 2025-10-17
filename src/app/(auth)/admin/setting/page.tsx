"use client";
import ProfileForm from "@/components/form/profile-form";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingPage() {
  return (
    <DashboardLayout>
      <h2 className="semi-bold text-2xl pt-3">Setting</h2>
      <p className="text-sm thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi similique laborum animi!</p>
      <Separator />
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <ProfileForm />
        </TabsContent>
        <TabsContent value="roles">Password</TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
