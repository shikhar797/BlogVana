"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "animate.css";
import Link from "next/link";
import Footer from "@components/Footer";
export default function AboutMe() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <Parallax speed={-10}>
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 animate__animated animate__fadeIn">
              About Me
            </h1>
            <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400 animate__animated animate__fadeInUp">
              Hi, I'm <span className="font-semibold text-black dark:text-white">Shikhar Gupta</span>, passionate about technology, development, and innovation.
            </p>
          </Parallax>

          {/* Profile Section */}
          <div className="mt-16 flex flex-col items-center">
            <Parallax speed={5}>
              <img
                src="/assets/images/shikhar.jpg" // Replace with your image path
                alt="Shikhar Gupta"
                className="grayscale w-40 h-40 rounded-full shadow-lg animate__animated animate__zoomIn"
              />
            </Parallax>
            <h2 className="mt-6 text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Shikhar Gupta
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
            Developer | Lifelong Learner
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <Parallax speed={3}>
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
                My Skills
              </h3>
              <div className="grid grid-cols-2 gap-6 mt-8 md:grid-cols-4">
                <div className="p-4 text-center rounded-lg shadow bg-transpernt card border hover:skeleton">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    JavaScript
                  </span>
                </div>
                <div className="p-4 text-center rounded-lg shadow bg-transpernt border hover:skeleton">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    React
                  </span>
                </div>
                <div className="p-4 text-center rounded-lg shadow bg-transpernt border hover:skeleton">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Tailwind CSS
                  </span>
                </div>
                <div className="p-4 text-center rounded-lg shadow bg-transpernt border hover:skeleton">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Node.js
                  </span>
                </div>
                <div className="p-4 text-center rounded-lg shadow bg-transpernt border hover:skeleton">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    DSA
                  </span>
                </div>
                <div className="p-4 text-center rounded-lg shadow bg-transpernt border hover:skeleton">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Python
                  </span>
                </div>
                <div className="p-4 text-center rounded-lg shadow bg-transpernt border hover:skeleton">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Pygame -2d GAME DEV
                  </span>
                </div>
              </div>
            </Parallax>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Parallax speed={-5}>
              <p className="text-lg text-gray-600 dark:text-gray-400 animate__animated animate__fadeInUp">
                Want to work together? Feel free to reach out!
              </p>
              <button className="btn btn-primary mt-4 animate__animated animate__pulse">
                Contact Me
              </button>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
          {/* Header Section */}
          <Parallax speed={-10}>
            <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-200 animate__animated animate__fadeIn">
              My Projects
            </h1>
            <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400 animate__animated animate__fadeInUp">
              A collection of some of the projects I've worked on. From Python games to Web Development clones!
            </p>
          </Parallax>

          {/* Projects Section */}
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Project 1 - Pokemon Game */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="/assets/images/pokemon.jpeg" // Replace with your game image
                  alt="Pokemon Game"
                  className="object-cover w-full h-40"
                  width={300}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Pokemon Game</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A Python-based game where you capture and battle Pokemon! Built using Pygame for an engaging experience.
                </p>
                <div className="card-actions justify-end">
                  <a href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                  <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Play Demo</Link>
                </div>
              </div>
            </div>

            {/* Project 2 - Space Shooter */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="/assets/images/spaceshooter.jpeg" // Replace with your game image
                  alt="Space Shooter"
                  className="object-cover w-full h-40"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Space Shooter</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A fun space shooter game built with Python and Pygame. Defend the galaxy from alien invaders!
                </p>
                <div className="card-actions justify-end">
                  <a href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                  <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Play Demo</Link>
                </div>
              </div>
            </div>

            {/* Project 3 - Flappy Bird */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="/assets/images/flappybird.jpg" // Replace with your game image
                  alt="Flappy Bird"
                  className="object-cover w-full h-40"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Flappy Bird Clone</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A clone of the popular Flappy Bird game made using Pygame, challenging your reflexes and timing.
                </p>
                <div className="card-actions justify-end">
                  <a href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                  <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Play Demo</Link>
                </div>
              </div>
            </div>

            {/* Project 4 - Big Bear Farm Clone */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="/assets/images/bigbear.jpg" // Replace with your clone image
                  alt="Big Bear Farm"
                  className="object-cover w-full h-40"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Big Bear Farm Clone</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A clone of the Big Bear Farm game built with React and Node.js. Manage your farm and expand your empire!
                </p>
                <div className="card-actions justify-end">
                  <a href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                  <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Demo</Link>
                </div>
              </div>
            </div>

            {/* Project 5 - Blogvana Clone */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="/assets/images/BlogVana3.png" // Replace with your clone image
                  alt="Blogvana"
                  className="object-cover w-full h-40"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Blogvana</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A Blogvana, a blogging platform built using Node.js, Express, and MongoDB. Build your own blog today!
                </p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/your-repo/blogvana" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                  <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Certificates Section */}
        <div className="container mx-auto px-6 py-32">
          {/* Header Section */}
          <Parallax speed={-10}>
            <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-200 animate__animated animate__fadeIn">
              My Certificates
            </h1>
            <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400 animate__animated animate__fadeInUp">
              Here are some of the certificates I have earned through various courses and achievements.
            </p>
          </Parallax>

          {/* Certificates Grid */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certificate 1 */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="/assets/images/certificate1.jpg" // Replace with your certificate image
                  alt="Certificate 1"
                  className="object-cover w-full h-[500px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">Certificate in Python Programming</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  This certificate was awarded for completing a comprehensive Python programming course.
                </p>
                <div className="card-actions justify-end">
                <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Certicate</Link>

                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="/assets/images/certificate2.png" // Replace with your certificate image
                  alt="Certificate 2"
                  className="object-cover w-full h-[500px]"
                  width={300}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">Full Stack Web Development</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  This certificate was awarded for completing a full-stack web development course.
                </p>
                <div className="card-actions justify-end">
                <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Certicate</Link>

                </div>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="" // Replace with your certificate image
                  alt="Certificate 3 in process"
                  className="object-cover w-full h-[500px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">Data Structure And Algorithm</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  This certificate is awarded for completing an advanced Data Structure And Algorithm course.
                </p>
                <div className="card-actions justify-end">
                <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Certicate</Link>

                </div>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img
                  src="" // Replace with your certificate image
                  alt="Certificate 4 in process"
                  className="object-cover w-full h-[500px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">Machine Learning</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Awarded for completing a course on Machine Learning with hands-on projects.
                </p>
                <div className="card-actions justify-end">
                <Link href={"/in-progress"} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Certicate</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </ParallaxProvider>
  );
}
