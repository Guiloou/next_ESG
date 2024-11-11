import dynamic from "next/dynamic";
import {listarPosts} from "./_servicos/posts-servicos";
import Link from "next/link";
import CriarPostModal from "./_components/criar-post-modal";

const dateTimeFormat = Intl.DateTimeFormat("pt-BR");

export const revalidate = 10;

export default async function Posts() {
  const posts = await listarPosts();

  return (
    <>
      <header className="container flex items-center justify-between w-full mt-7">
        <h1 className="text-white mb-0">Posts</h1>
        <CriarPostModal /> {/* Este é o Client Component */}
      </header>
      <section className="container w-full mt-7">
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div key={post.id}>
              <h3 className="my-0">
                <Link href={`/posts/${post.slug}`}>{post.titulo}</Link>
              </h3>
              <span className="text-zinc-300 text-sm">
                Postado em: {dateTimeFormat.format(post.criadoEm)} -
                Comentários: {post._count.postCommentarios}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}