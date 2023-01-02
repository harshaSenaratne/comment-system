import fastify,{FastifyReply,FastifyRequest} from "fastify";
import sensible from  '@fastify/sensible';
import {config as dotenv} from 'dotenv';
import {PrismaClient} from '@prisma/client';
import cors from '@fastify/cors'
dotenv();

const app = fastify();
app.register(sensible);
app.register(cors,{
  origin:process.env.CLIENT_URL,
  credentials: true,

});
const prisma = new PrismaClient();
app.get("/posts",async(req:FastifyRequest,res:FastifyReply)=>{
  console.info("REQUEST ", req.params)
  return await commitToDb(
    prisma.post.findMany({
      select:{
        id:true,
        title:true
      }
    })
  )
})

app.get("/posts/:id",async(req:FastifyRequest<{
  Params:{
    id:string
  }
}>,res:FastifyReply)=>{
  return await commitToDb(
    prisma.post.findUnique({
      where:{id:req?.params?.id},
      select:{
        id:true,
        title:true,
        body:true,
        comments:{
          orderBy:{
            createdAt:'desc'
          },
          select:{
            id:true,
            message:true,
            parentId:true,
            createdAt:true,
            user:{
              select:{
                id:true,
                name:true
              }
            }
          }
        }
      }
    })
  )
})

async function commitToDb(promise:any){
  const [error, data] = await app.to(promise)
  if(error) return app.httpErrors.internalServerError(error.message)
  return data  
}
 app.listen({port:parseInt(process.env.PORT!)},()=>{
   console.log("Listening to port",process.env.PORT)
 })
