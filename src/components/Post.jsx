/* eslint-disable react/prop-types */
export default function Post({ post }) {
  return (
    <div>
      <h3 className="font-bold">
        {post.author} - {post.dateTime}
      </h3>
      <p>{post.content}</p>
    </div>
  );
}
