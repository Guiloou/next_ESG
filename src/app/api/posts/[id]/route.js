import {
    criarComentarioNoPost,
    listarComentariosDoPost,
  } from "@/app/(site)/posts/_servicos/posts-servicos";
  
  export async function GET(request, {params}) {
    const postId = params.id;
    const comentarios = await listarComentariosDoPost(postId);
  
    return Response.json(comentarios);
  }
  
  export async function POST(request, {params}) {
    const postId = params.id;
    const payload = await request.json();
    const comentario = await criarComentarioNoPost({...payload, postId});
  
    return Response.json(comentario);
  }