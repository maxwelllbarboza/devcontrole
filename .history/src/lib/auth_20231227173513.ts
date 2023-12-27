import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import * as bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
    
    providers: [
		CredentialsProvider({
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
              })
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'text'  },
				senha: { label: 'Senha', type: 'password' }
			},

			async authorize(credentials, req): Promise<any> {		
				
				if(!credentials?.email || !credentials?.senha)return null;										 
				
				  
				const  user = await prisma.usuario.findFirst({
					where:{
						email: credentials?.email,
					},
				});					
										
				const match = await bcrypt.compare(credentials?.senha, user?.senha as string);
			
                if( user?.email && user?.email === credentials?.email && match){
									
                    return user as any;
                }                
				return null				
			},
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
