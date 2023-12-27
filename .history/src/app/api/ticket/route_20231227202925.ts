import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'
import { Ticket } from '@prisma/client';

// http://localhost:3000/api/ticket
export async function PATCH(request: Request){
  const session = await getServerSession(authOptions);

  if(!session || !session.user){
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const { id } = await request.json();

  const findTicket = await prismaClient.ticket.findFirst({
    where:{
      id: id as string
    }
  })

  if(!findTicket){
    return NextResponse.json({ error: "Filed update ticket" }, { status: 400 })
  }

  
  try{
    await prismaClient.ticket.update({
      where:{
        id: id as string
      },
      data:{
        status: "FECHADO"
      }
    })

    return NextResponse.json({ message: "Chamado atualizado com sucesso!" })
    
  }catch(err){
    return NextResponse.json({ error: "Filed update ticket" }, { status: 400 })
  }


}


export async function POST(request: Request){
  const newTicket: Ticket = await request.json();

  if(!newTicket.customerId || !newTicket.name || !newTicket.description){
    return NextResponse.json({ error: "Failed create new ticket"}, { status: 400 });
  }

  try{

    const createTicket: Ticket = await prismaClient.ticket.create({
      data:
    })as any

    return NextResponse.json({ message: "Chamado registrado com sucesso!"})

  }catch(err){
    return NextResponse.json({ error: "Failed create new ticket"}, { status: 400 });
  }


}