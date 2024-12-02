export default function InProgress() {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <div className="text-center">
         {/* Crazy Blob Animation */}
        <div className="relative w-24 h-24 mb-8 items-center ml-[120px] md:ml-[180px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-blob opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-blob animation-delay-4000"></div>
        </div>
          
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800">Work in Progress</h1>
          
          {/* Subheading */}
          <p className="mt-4 text-lg text-gray-500">
            We're working hard to bring this page to life. Stay tuned!
          </p>
  
          {/* Back to Home Button */}
          <div className="mt-6">
            <a
              href="/"
              className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Go Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
  