"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ProfileSchema, ProfileValue } from "@/validations/profile.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import useUser from "@/hooks/useUser";
import { toast } from "sonner";
import { message } from "@/constants/message";
import { profileUpdate } from "@/app/actions/user";
import React, { useEffect, useState } from "react";

const ProfileForm = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { register, handleSubmit, reset, formState } = useForm<ProfileValue>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user?.name,
    },
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user]);

  const onSubmit = async (data: ProfileValue) => {
    toast.loading(message.SUBMIT.LOADING);
    setIsLoading(true);
    try {
      await profileUpdate(user?.id, data);
      toast.success(message.SUBMIT.SUCCESS);
    } catch (error) {
      toast.error(message.SUBMIT.ERROR);
    } finally {
      setIsLoading(false);
      toast.dismiss();
    }
  };
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" {...register("name")} required disabled={isLoading} />
              {formState.errors.name && <p className="text-sm text-red-500">{formState.errors.name.message}</p>}
            </div>
            {/* <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" {...register("email")} required disabled={isLoading} />
              {formState.errors.email && <p className="text-sm text-red-500">{formState.errors.email.message}</p>}
            </div> */}
            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? message.SUBMIT.LOADING : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
