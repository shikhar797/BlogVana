"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function PromptCard({
  post,
  handleTagClick = () => {}, // Default to no-op if not provided
  handleEdit = () => {},
  handleDelete = () => {},
}) {
  const router=useRouter();
  const [copied, setCopied] = useState("");
  const {data:session} =useSession();
  const pathName=usePathname();
  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopied(post.prompt);
    setTimeout(() => setCopied(""), 2000); // Reset copied state after 2 seconds
  };
  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };
  

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:skeleton">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4" onClick={handleProfileClick}>
        {/* User Info */}
        <div className="flex items-center gap-3">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{post.creator.username}</h3>
            <p className="text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

        {/* Copy Icon */}
        <div onClick={handleCopy} className="cursor-pointer">
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy_icon"
            width={12}
            height={12}
          />
        </div>
      </div>

      {/* Prompt Content */}
      <p className="text-white mb-3">{post.prompt}</p>

      {/* Tag */}
      <p
        className="text-blue-500 cursor-pointer"
        onClick={() => handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      
      
      {session?.user._id === post.creator.id && pathName=="/profile"&& (
  <div className="flex gap-3 mt-4">
    <button
      onClick={handleEdit}
      className="text-sm text-blue-600 hover:underline"
    >
      Edit
    </button>
    <button
      onClick={handleDelete}
      className="text-sm text-red-600 hover:underline"
    >
      Delete
    </button>
  </div>
)}

    </div>
  );
}
