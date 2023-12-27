
import Container from "../../components/container/page"
export default function Login(){
    return(

        async function handleSubmit() {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                })
            })
            const data = await response.json()
            if(data.error){
                alert(data.error)
            }else{
                window.location.href = '/dashboard'
            }
        }

        <Container>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
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