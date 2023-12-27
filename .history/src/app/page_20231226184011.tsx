import Image from 'next/image'

export default function Home() {
  return (

    <main className='flex items-center flex-col justify-center min-h-[calc(100vh - 80px)]'>
      <Header>

      <h2 className='font-medium text-2xl mb-2'>Gerencie sua empresa</h2>
      <h1 className='font-bold text-3xl mb-8 text-blue-600 md:text-4xl'>Atendimentos, clientes</h1>
      <Image 
        src="hero.svg" 
        alt="Imagem hero"  
        width={500}
        height={500}
        className='max-w-sm md:max-w-xl'
        />
      </Header>
      
    
    </main>
  )
}
