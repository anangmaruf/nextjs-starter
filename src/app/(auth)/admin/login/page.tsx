import { LoginForm } from "@/components/form/login-form";
import useUser from "@/hooks/useUser";

export default function Page() {
  const  = useUser(); 
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
