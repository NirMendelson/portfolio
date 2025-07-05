import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex items-center justify-center">
        <img src="/profile.jpg" alt="Profile" className="w-40 h-40 object-cover" style={{ objectPosition: 'center' }} />
      </div>
      <h1 className="text-6xl font-bold leading-tight m-0">
        Hi I&apos;m Nir <span role="img" aria-label="wave">👋</span>
        <br />
        <span>and I love to build <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI products</span></span>
      </h1>
      <p className="text-gray-600 text-xl my-8 px-40">
        I have a strong foundation in AI, product development, and full-stack web technologies, and I build intelligent, user-focused tools that solve real-world problems.
      </p>
      <div className="flex gap-6">
        <button className="bg-blue-600 text-white rounded-lg px-8 py-2.5 text-lg font-medium shadow-md hover:bg-blue-700 transition">
          Contact me
        </button>
        <button className="bg-gray-100 text-gray-900 rounded-lg px-8 py-2.5 text-lg font-medium hover:bg-gray-200 transition">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Home;
