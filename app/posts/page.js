import PostList from "@/components/PostList";
import { getPosts } from "@/lib/wordpress";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </main>
  );
}