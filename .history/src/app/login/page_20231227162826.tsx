"use client"
import Container from "../../components/container/page"
export default function Login(){
    return(

        // async function handleSubmit() {
       
        // }

        <Container>
            <div>
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <h1 className="">Login</h1>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button on>Login</button>
                    </form>

                </div>
            </div>
            
        </Container>
        
    )
}