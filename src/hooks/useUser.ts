import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type UserType = {
  id: string;
  email: string;
  name: string;
};

const useUser = () => {
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<UserType | null>(null);
  const { data: session, status } = useSession();

  React.useEffect(() => {
    setIsloading(true);
    if (status === "authenticated" && session.user) {
      setUser(session.user);
    } else {
      setUser(null);
    }
    setIsloading(false);
  }, [session, status, isLoading]);

  return { user, isLoading };
};

export default useUser;
