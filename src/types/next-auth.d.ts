import NextAuth, { User, type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import "next/server";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token: string;
      name: string;
      email: string;
    };
  }
  interface User {
    id: string;
    token: string;
    name: string;
    email: string;
  }
}

declare module "next/server" {
  interface NextRequest {
    nextauth?: {
      token: JWT | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      token: string;
      name: string;
      email: string;
    };
  }
}
