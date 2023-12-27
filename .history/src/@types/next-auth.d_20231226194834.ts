import { DefaultSession } from "next-auth";

declare module "next-auth{
    interface Session n {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
        }
    }
}