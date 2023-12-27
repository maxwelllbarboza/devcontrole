import { DefaultSession } from "next-auth";

declare module "next-auth{
    interface Session s DefaultSession {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
        }
    }
}