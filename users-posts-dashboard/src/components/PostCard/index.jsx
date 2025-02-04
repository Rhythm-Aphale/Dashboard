export default function PostCard({ post }) {
  return (
    <div className="p-6 bg-gray-800 text-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="text-sm text-gray-400 mb-4">User ID: {post.userId}</p>
      <p className="text-sm text-gray-400 mb-4">ID: {post.id}</p>
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-300">{post.body}</p>
    </div>
  );
}
