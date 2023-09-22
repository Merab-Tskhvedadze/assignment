import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import config from "@/config";
import axios from "axios";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in with Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (credentials == null) return null;
        try {
          const { user, jwt } =
            (await axios
              .post(`${config.api}/api/auth/local`, {
                identifier: credentials.email,
                password: credentials.password,
              })
              .then((response) => {
                return response.data;
              })
              .catch((error) => {
                console.log(error.response);
                throw new Error(error.response.data.message);
              })) || null;

          return { jwt, ...user };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIEN_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    session: async ({ session, token }: { session: any; token: any }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user.username = token.username;
      return session;
    },
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        token.id = user.id;
        token.jwt = user.jwt;
        token.username = user.username;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
