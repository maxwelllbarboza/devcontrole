import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex items-center flex-col justify-center min-h-screen'>
      <h2>Gerencie sua empresa</h2>
      <h1>Atendimentos, clientes</h1>
      <Image 
        src="hero.svg" 
        alt="Imagem hero"  
        width={600}
        height={}
        className='max-w-sm md:max-w-xl'
      />
      
    
    </main>
  )
}
