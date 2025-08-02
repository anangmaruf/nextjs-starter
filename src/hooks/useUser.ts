import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useUser = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [user, setUser] = useState({});
  const { data: session, status } = useSession();

  useEffect(() => {
    setIsloading(true);
    if (status === "authenticated" && session.user) {
      setUser(session.user);
    }
    setIsloading(false);
  }, [session, status, isLoading]);

  return { user, isLoading };
};

export default useUser;
