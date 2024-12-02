import Feed from '@components/Feed'
import Link from 'next/link';
export default function Home(){
    return(
    <>
    <div className="relative">
    <div className="absolute top-0 left-0 w-full h-full z-10">
    </div>

    <div className="relative flex-col mt-16 z-20">
        <h1 className="text-center text-5xl font-bold z-20">
            Discover & Share
            <br />
            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-purple-700 bg-clip-text text-transparent">
                What You Like
            </span>

            <p className="text-2xl m-6">BlogVana is a free-to-use website for the modern world to discover, create, and share creative blogs</p>
        </h1>
        <Feed/>
    </div>

</div>
<div className="border-gray-200 rounded-lg shadow-md p-6 text-center hover:animate-pulse transition-shadow transform">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">
    About Me
  </h2>
  <p className="text-gray-600 mb-6">
    Welcome to the About Me page! Learn more about my journey, skills, and interests.
  </p>
  <Link
    href={"/about-me"}
    className="px-4 py-2 glass skeleton text-white rounded-lg shadow hover:bg-blue-500 transition-colors"
  >
    Explore More
  </Link>
</div>

<div className='h-[100px]'></div>
    </>
    );
}