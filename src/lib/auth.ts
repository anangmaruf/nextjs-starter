import CredentialProvider from "next-auth/providers/credentials";
import { throwIfError } from "./throwIf";
import { comparePassword } from "./helper";
import { NextAuthOptions } from "next-auth";
import { UserService } from "@/services/UserService";

type CredentialsType = {
  email: string;
  password: string;
};

const nextAuthOpts = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<any> {
        try {
          const { email, password } = credentials as CredentialsType;

          throwIfError(!email || !password, "Missing Email or Password");

          const user = await UserService.getByEmail(email);
          const { id, name, password: hashedPassword } = user;

          const isValid = comparePassword(hashedPassword, password);
          throwIfError(!isValid, "Invalid Email or Password");

          return { id, email, name };
        } catch (error) {
          console.error("Authentication Error:", error);
          throw new Error((error as Error).message || "Authentication failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login?error=AuthError",
  },
} satisfies NextAuthOptions;

export default nextAuthOpts;
