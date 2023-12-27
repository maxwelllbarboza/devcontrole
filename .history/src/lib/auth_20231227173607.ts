import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import * as bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
    
    providers: [
		
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
            })
    ],
	pages: {
		signIn: '/'
	},
    callbacks:{
        async session({session, token, user, }){
            session.user = {...session.user, id: user.id} as {
                id: string;
                name: string;
                email: string;
                image: string;
            }

            return session;

        }
    }    
}
