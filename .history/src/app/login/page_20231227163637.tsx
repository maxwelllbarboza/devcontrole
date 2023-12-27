"use client"
import Container from "../../components/container/page"
export default function Login(){
    return(

        // async function handleSubmit() {
       
        // }

        <Container>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
                <div className="sm:mx-auto sm:w-full">
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