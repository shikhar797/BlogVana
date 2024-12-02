import Link from 'next/link';
import 'animate.css';

export default function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className="animate__animated animate__fadeIn flex flex-col items-center sm:py-10 px-6 rounded-lg shadow-lg max-w-2xl mx-6 -mt-16">
      {/* Title */}
      <h1 className="text-3xl font-bold text-primary mb-4 animate__animated animate__bounceIn">
        {type} Post
      </h1>
      <p className="text-center mb-8 animate__animated animate__fadeIn">
        {type} and share amazing blogs with the world. Let your imagination take over!
      </p>

      {/* Form */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full flex flex-col gap-6 animate__animated animate__fadeInUp"
      >
        {/* Blog Content */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Your Blog</span>
          </label>
          <textarea 
            value={post.prompt} 
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your blog content here..."
            required
            className="textarea textarea-bordered h-32 glassmorphism"
          />
        </div>

        {/* Tag Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Tags <span className="text-gray-500">(e.g., #life #self-growth)</span>
            </span>
          </label>
          <input 
            value={post.tag} 
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Add relevant tags..."
            required
            className="input input-bordered glassmorphism"
          />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between items-center">
          <Link href="/" className="btn btn-outline btn-error animate__animated animate__fadeInLeft">
            Cancel
          </Link>
          <button 
            type="submit" 
            disabled={submitting}
            className={`btn btn-primary animate__animated animate__fadeInRight ${
              submitting ? "loading" : ""
            }`}
          >
            {submitting ? "Submitting..." : `${type} Post`}
          </button>
        </div>
      </form>
    </section>
  );
}
