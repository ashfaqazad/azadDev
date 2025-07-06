export default function AboutPage() {
  return (

    <div className="px-6 w-full mx-auto">

<section className="relative bg-gradient-to-tr from-gray-950 via-gray-900 to-black text-white py-24 px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10 relative">

    {/* Left Side Content */}
    <div>
      <h2 className="text-5xl font-extrabold mb-4 leading-tight">
        Building Dreams, One Line of Code at a Time.
      </h2>
      <p className="text-gray-300 text-lg mb-6">
        We’re a passionate team turning complex business ideas into elegant digital platforms.
      </p>
      <div className="border-l-4 border-blue-500 pl-4 text-gray-500 italic">
        “Code is our craft, and your success is our goal.”
      </div>
    </div>

    {/* Right Side Image with Glass Effect */}
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl w-full max-w-md mx-auto">
      <img
        src="/Images/team.jpg"
        alt="Team Collaboration"
        className="rounded-xl w-full h-[300px] object-cover"
      />
    </div>
  </div>

  {/* Decorative Blur Circle */}
  <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full z-0" />
</section>




      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">About Us</h1>

      {/* Sub-title / short description */}
      <p className="text-center text-gray-400 mb-12">
        We specialize in creating modern, scalable, and high-performance web solutions for startups, businesses, and entrepreneurs.
      </p>

      {/* Main Grid */}
      <div className="p-2 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image */}
        <img
          src="/Images/passion.avif"
          alt="About Us"
          className="w-full rounded-lg shadow"
        />

        {/* Right Side: Two Text Boxes */}
        <div className="flex flex-col gap-8">
          {/* Our Story */}
          <div className="border-[0.5px] border-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Our Story</h3>
            <p className="text-gray-400">
              Starting from small freelance projects, we grew into a full-fledged web development team delivering end-to-end solutions. Our expertise spans frontend design, backend logic, APIs, and full-stack web applications using the MERN stack and Next.js.
            </p>
          </div>

          {/* Our Mission */}
          <div className="border-[0.5px] border-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-400">
              Our mission is to simplify the digital experience for businesses by building reliable, scalable, and user-friendly web platforms. We focus on writing clean code, maintaining performance, and delivering value to every client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}







{/* <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"> */}
          {/* Text Content */}
          {/* <div>
            <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 mb-6">
              We are a team of passionate full-stack developers committed to transforming ideas into modern, high-performance digital products. Our journey is rooted in innovation, problem-solving, and dedication to quality.
            </p>
            <p className="text-gray-400">
              With years of experience building with React, Next.js, and MongoDB, we’ve helped startups and businesses build fast, secure, and scalable web apps tailored to their goals.
            </p>
          </div> */}

          {/* Image */}
          {/* <div>
            <img
              src="/Images/teamwork.avif"
              alt="Our Team"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}



    
      {/* About Page Hero Section */}
      {/* <section className="bg-gray-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/Images/abstract-bg.svg')] bg-cover bg-center z-0" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"> */}
          {/* Text */}
          {/* <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Who We Are</h2>
            <p className="text-gray-300 mb-4">
              We are a team of passionate full-stack developers committed to transforming ideas into modern, high-performance digital products.
            </p>
            <p className="text-gray-400">
              With expertise in React, Next.js, and MongoDB, we deliver scalable, user-focused solutions tailored for startups and businesses worldwide.
            </p>
          </div> */}

          {/* Image */}
          {/* <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <img
              src="/Images/teamwork.avif"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}





{/* <section className="bg-neutral-900 text-white py-20 px-6 border-b border-neutral-800">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"> */}
    {/* Text Content */}
    {/* <div className="flex-1">
      <h2 className="text-5xl font-bold leading-tight mb-4">
        Meet the Team Behind the Code
      </h2>
      <p className="text-gray-400 text-lg mb-6">
        We're not just developers — we're builders, creators, and partners in your digital journey.
      </p>
      <p className="text-gray-500">
        From designing intuitive interfaces to engineering secure backends, we handle every layer of modern web development with precision and care.
      </p>
    </div> */}

    {/* Image Content */}
    {/* <div className="flex-1 flex justify-center">
      <div className="w-[300px] h-[300px] bg-gray-800 rounded-full overflow-hidden shadow-2xl border border-gray-700">
        <img
          src="/Images/teamwork.avif"
          alt="Team at Work"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section> */}
