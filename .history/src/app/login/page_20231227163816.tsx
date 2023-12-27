"use client"
import Container from "../../components/container/page"
export default function Login(){
    return(

        // async function handleSubmit() {
       
        // }

        <Container>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                    

                </div>

                <div>
                    <form >
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