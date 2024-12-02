import PromptCard from "./PromtCard";

export default function Profile({ name, desc, data, handleEdit, handleDelete }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold text-left mb-4 animate__animated animate__fadeIn">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{name} Profile</span>
      </h1>
      <p className="text-xl text-left mb-8 text-gray-500 animate__animated animate__fadeIn">{desc}</p>

      {/* Grid Layout for Post Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data && data.length > 0 ? (
          data.map((post) => (
            <div
              key={post._id}
              className="card w-full shadow-xl rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeInUp"
            >
              {/* Card Content */}
              <PromptCard
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No posts available</p>
        )}
      </div>
    </section>
  );
}

