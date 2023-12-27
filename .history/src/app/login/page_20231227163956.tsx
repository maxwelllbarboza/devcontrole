"use client"
import Container from "../../components/container/page"
export default function Login(){
    return(

        // async function handleSubmit() {
       
        // }

        <Container>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login
                    </h2>
                    

                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form  className="space-y-6">
                        <h1 className="">Login</h1>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button >Login</button>
                    </form>
                </div>
            </div>
            
        </Container>
        
    )
}