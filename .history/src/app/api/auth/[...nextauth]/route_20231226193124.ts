import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth";

const handlres = NextAuth(authOptions);

export {handler as GET, handler as POST }