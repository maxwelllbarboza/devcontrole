import { DefaultSession } from "next-auth";

declare module "next-auth{
    interface Session efaultSession {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
        }
    }
}