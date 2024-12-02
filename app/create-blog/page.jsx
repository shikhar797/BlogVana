"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from '@components/Form';

export default function CreatePost() {
    const { data: session } = useSession(); // Correctly using useSession
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session.user.id, // Ensure session is properly fetched
                    tag: post.tag,
                }),
            });
            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
          {session?.user ? (
            <Form
              type="Create"
              post={post}
              setPost={setPost}
              submitting={submitting}
              handleSubmit={createPrompt} // Updated prop name
            />
          ) : (
            <>
            <div className="flex items-center justify-center">
                <p className="text-white m-2 glassmorphism skeleton p-2">You need to log in to create the blog.</p>
            </div>

            </> 
          )}
        </>
      );
}
