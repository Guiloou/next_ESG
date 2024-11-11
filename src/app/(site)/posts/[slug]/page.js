import Markdown from "react-markdown";
import {listarPosts, retornarPostPorSlug} from "../_servicos/posts-servicos";
import Comentarios from "../_components/comentarios";

const dateTimeFormat = Intl.DateTimeFormat("pt-BR");

export const revalidate = 10;

export async function generateMetadata({params}) {
  const post = await retornarPostPorSlug(params.slug);

  return {
    title: post.titulo,
    description: `${post.conteudo.substring(0, 120)}...`,
  };
}

export async function generateStaticParams() {
  const posts = await listarPosts();

  return posts.map((post) => ({slug: post.slug}));
}

export default async function PostDetalhes({params}) {
  const post = await retornarPostPorSlug(params.slug);

  return (
    <>
      <header className="container flex flex-col gap-2 w-full mt-7">
        <h1 className="text-white mb-0">{post.titulo}</h1>
        <span className="text-zinc-300 text-sm">
          Postado em: {dateTimeFormat.format(post.criadoEm)}
        </span>
      </header>
      <article className="container w-full mt-7 mb-10 prose text-zinc-300">
        <Markdown>{post.conteudo}</Markdown>
      </article>

      <Comentarios postId={post.id} />
    </>
  );
}