import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({    
    providers: [		
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
	
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
