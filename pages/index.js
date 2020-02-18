import Layout from '../components/MyLayout';
import Link from 'next/link';
import '../styles/index.css'

function getPosts() {
  return [
    { id: '1', title: 'Hello Next.js' },
    { id: '2', title: 'Learn Next.js is awesome' },
    { id: '3', title: 'Deploy apps with ZEIT' }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${post.id}?title=${post.title}`}>
      <a>{post.id}. {post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1 className="text-2xl mt-6">My Blog</h1>
      <hr></hr>
      <ul className="mt-6">
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
}