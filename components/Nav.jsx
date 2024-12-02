"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Navbar() {
  const {data:session} =useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown,setToggleDropDown]=useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    fetchData();
  }, []);
  return (
    <nav className="flex items-center justify-between w-full p-8 px-4 mb-16 p- sm:px-8">
      {/* Left-side Logo and Title */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/BlogVana4.png"
          width={70}
          height={70}
          alt="BlogVana"
          quality={100}  // Set to 100 for high quality
          unoptimized={true}
        />
        {/* <span className="hidden text-lg font-semibold sm:block">BlogVana</span> */}
      </Link>

      {/* Right-side Buttons */}
    <div className="hidden sm:flex sm:items-center">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/create-blog"
              className="group sm:flex btn bg-black hover:skeleton hover:glass transform-none hover:scale-100"
            >
              Create Post
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="group sm:flex btn bg-black hover:skeleton hover:glass transform-none hover:scale-100"
            >
              Sign out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={36}
                alt="profile"
                className="block border-2 rounded-full glass"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="btn glass"
                >
                  Sign In with {provider.name}
                </button>
              ))}
          </>
        )}
    </div>
    {/* Mobile navigation bar */}
    <div className="relative flex sm:hidden">
  {session?.user ? (
    <div className="flex">
      <Image
        src={session?.user.image}
        width={30}
        height={30}

        alt="BlogVana"
        onClick={() => setToggleDropDown((prev) => !prev)}
        className="rounded-full ring "
      />
      {toggleDropDown && (
        <div className="absolute right-0 z-10 mt-2 rounded-lg shadow-lg top-full glass skeleton">
          <Link
            href="/profile"
            className="block p-2 menu dropdown-content"
            onClick={() => setToggleDropDown(false)}
          >
            MyProfile
          </Link>
          <Link
            href="/profile"
            className="block p-2 menu dropdown-content"
            onClick={() => setToggleDropDown(false)}
          >
            Create Post
          </Link>
          <button
            
            className="block p-2 menu dropdown-content"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  ) : (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="btn glass"
          >
            Sign In with {provider.name}
          </button>
        ))}
    </>
  )}
</div>

    </nav>
  );
}
