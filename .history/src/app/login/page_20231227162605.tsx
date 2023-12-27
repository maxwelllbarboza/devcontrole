
import Container from "../../components/container/page"
export default function Login(){
    return(
        <Container>
            <div>
                <div>
                    <form onSubmit={}>
                        <h1>Login</h1>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button>Login</button>
                    </form>

                </div>
            </div>
            
        </Container>
        
    )
}