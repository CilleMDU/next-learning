// The host serves the REST API under /index.php (no pretty permalinks)
const API_URL = `${process.env.WORDPRESS_URL}/index.php/wp-json/wp/v2`;

async function wpFetch(path) {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status} ${path}`);
  }

  return response.json();
}

export function getPosts() {
  return wpFetch("/posts?_embed");
}

export function getLatestPosts(count = 3) {
  return wpFetch(`/posts?per_page=${count}&_embed`);
}

export async function getPostBySlug(slug) {
  const posts = await wpFetch(`/posts?slug=${encodeURIComponent(slug)}&_embed`);
  return posts[0] ?? null;
}

export async function getPageBySlug(slug) {
  const pages = await wpFetch(`/pages?slug=${encodeURIComponent(slug)}&_embed`);
  return pages[0] ?? null;
}