import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Walking in Faith Daily",
    excerpt:
      "Discover how to cultivate a consistent walk with God even in today’s busy world.",
    date: "June 25, 2025",
    image: "/images/blog1.jpg",
    author: "Pastor Grace Johnson",
  },
  {
    id: 2,
    title: "The Power of Community in Christ",
    excerpt:
      "Learn the importance of being a part of a strong, faith-based community.",
    date: "June 18, 2025",
    image: "/images/blog2.jpg",
    author: "Elder Samuel Thomas",
  },
  {
    id: 3,
    title: "Why Prayer Changes Everything",
    excerpt:
      "Explore the transformative power of prayer and how it can shape your life.",
    date: "June 10, 2025",
    image: "/images/blog3.jpg",
    author: "Sister Rebecca Allen",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Church Blog</h1>
        <p className="text-lg italic text-[#FFF5E1]/80 max-w-2xl mx-auto">
          "Your word is a lamp for my feet, a light on my path." – Psalm 119:105
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#FFF5E1]/10 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-[#FFF5E1]">
                {post.title}
              </h2>
              <p className="text-sm text-[#FFF5E1]/70 mb-2">
                {post.date} — By {post.author}
              </p>
              <p className="text-[#FFF5E1]/90 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block px-4 py-2 bg-[#B0A8B9] text-[#800020] rounded hover:bg-[#a295a6] font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
