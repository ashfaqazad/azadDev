// import { Hero } from "@/hero/page";

import About from "@/app/about/page";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
      <p>This is a simple Next.js frontend demo.</p> */}
      {/* <Hero /> */}
      <Carousel />
      {/* <About /> */}



      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h2 className="text-3xl font-bold mb-4">We Are Digital Builders</h2>
    <p className="text-gray-400">
      We are a team of full stack developers crafting scalable, fast, and secure web apps using MERN stack and Next.js. Our mission is to empower businesses through modern, efficient digital solutions.
    </p>
  </div>
  <img src="/images/teamwork.webp" alt="Team at work" className="rounded-lg shadow w-full h-[300px] object-cover" />
</section>







<section className="py-16 px-6 bg-gray-700">
  <h2 className="text-white text-3xl font-bold text-center mb-10">Our Core Services</h2>
  <div className="text-gray-700 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { title: "Web Development", desc: "I create custom websites using modern technologies. My goal is to build fast, responsive, and user-friendly web applications.", icon: "💻" },
      { title: "UI/UX Design", desc: "I design clean and user-friendly interfaces that are easy to use and visually appealing. My goal is to create layouts that feel simple and smooth.", icon: "🎨" },
      { title: "API Integration", desc: "I connect websites with external services to add features like payments, logins, and real-time data. This makes your site more powerful and interactive", icon: "🔗" },
    ].map((item, i) => (
      <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center">
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>




<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      "⚡ Fast Performance",
      "🔐 Secure Architecture",
      "📱 Mobile-First Design",
      "🧩 Scalable Codebase",
      "🛠️ Post-launch Support",
      "🌐 SEO Optimized",
    ].map((point, index) => (
      <div key={index} className="bg-white text-black text-center border p-6 rounded-lg shadow-sm text-lg">
        {point}
      </div>
    ))}
  </div>
</section>






<section className="py-16 bg-gray-200 text-center">
  <h2 className="text-3xl text-gray-600 font-bold mb-8">What Clients Say</h2>
  <blockquote className="max-w-3xl mx-auto italic text-gray-700 text-lg">
    "Their web development skills are top-notch! Delivered a fully functional Web Site in record time."
    <footer className="mt-4 text-gray-500">
      — <a href="https://rameezbabar.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
        Rameez Ahmed, GBP Expert.
      </a>
    </footer>
  </blockquote>
</section>




<section className="py-16 bg-indigo-600 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Ready to Build Something Awesome?</h2>
  <p className="mb-6">Let’s discuss your project and bring it to life.</p>
  <a href="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-100">
    Get In Touch
  </a>
</section>


    </div>
  );
}







// export default function HomePage() {
//   return (
//     <main className="px-6 py-10">

//       <section className="text-center mb-16 bg-indigo-900 text-white py-16 px-6 rounded-lg">
//   <h1 className="text-4xl font-bold mb-4">We Build Fast and Scalable Web Applications</h1>
//   <p className="text-lg text-gray-200 mb-6">MERN Stack | Next.js | Full Stack Solutions</p>

//   <p className="text-gray-100 max-w-2xl mx-auto mb-8">
//     With years of experience building full-stack web applications, we specialize in crafting high-performance, SEO-friendly, and scalable solutions tailored to your business needs. From modern UI designs to robust backends — we deliver results.
//   </p>

//   <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
//     Explore Services
//   </button>
// </section>

//       {/* <section className="text-center mb-16">
//         <h1 className="text-4xl font-bold mb-4">We Build Fast and Scalable Web Applications</h1>
//         <p className="text-lg text-gray-600 mb-6">MERN Stack | Next.js | Full Stack Solutions</p>
//         <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Explore Services</button>

//         <p className="text-gray-700 max-w-2xl mx-auto mb-10">
//           With years of experience building full-stack web applications, we specialize in crafting high-performance, SEO-friendly, and scalable solutions tailored to your business needs. From modern UI designs to robust backends — we deliver results.
//         </p>

//       </section> */}


//         <section className="px-6 py-16 bg-sky-200 text-center">
//   <h2 className="text-gray-600 text-3xl font-bold mb-4">Recent Projects & Solutions</h2>
//   <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//     Here's a glimpse of some powerful solutions we've built for real-world use cases — combining speed, design, and functionality.
//   </p>

//   <div className="grid md:grid-cols-3 gap-8 text-left">
//     <div className="p-6 border rounded-lg shadow bg-white hover:shadow-lg transition">
//       <img src="/images/ecommerce.jpg" alt="E-commerce Platform" className="mb-4 rounded-lg" />
//       <h3 className="text-2xl font-semibold mb-2">E-commerce Platform</h3>
//       <p className="text-gray-700 mb-2">
//         A fully functional online store built using the MERN stack. Includes product listings, cart management, and real-time order tracking.
//       </p>
//       <p className="text-gray-500 text-sm">
//         Features: Stripe Payments, JWT Auth, Admin Dashboard, and Mobile-Responsive UI.
//       </p>
//     </div>

//     <div className="p-6 border rounded-lg shadow bg-white hover:shadow-lg transition">
//       <img src="/images/portfolio.jpg" alt="Developer Portfolio" className="mb-4 rounded-lg" />
//       <h3 className="text-2xl font-semibold mb-2">Animated Portfolio</h3>
//       <p className="text-gray-700 mb-2">
//         A high-performance single-page application (SPA) designed to showcase developer skills, projects, and contact info — built with React.
//       </p>
//       <p className="text-gray-500 text-sm">
//         Features: GSAP Animations, Responsive Design, SEO Optimized.
//       </p>
//     </div>

//     <div className="p-6 border rounded-lg shadow bg-white hover:shadow-lg transition">
//       <img src="/images/dashboard.jpg" alt="Admin Dashboard" className="mb-4 rounded-lg" />
//       <h3 className="text-2xl font-semibold mb-2">Admin Dashboard</h3>
//       <p className="text-gray-700 mb-2">
//         A secure and scalable admin panel with authentication and role-based access, used for managing users, products, and orders.
//       </p>
//       <p className="text-gray-500 text-sm">
//         Features: Next.js SSR, MongoDB, JWT Auth, Analytics Integration.
//       </p>
//     </div>
//   </div>
// </section>


//       {/* <section className="grid md:grid-cols-3 gap-6">
//         <div className="p-6 border rounded shadow">
//           <img src="/images/ecommerce.jpg" alt="E-commerce Platform" className="mb-4 rounded" />
//           <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
//           <p className="text-gray-600">
//             Built using MERN stack with Stripe integration, admin panel, and responsive UI.
//           </p>
//         </div>

//         <div className="p-6 border rounded shadow">
//           <img src="/images/portfolio.jpg" alt="Developer Portfolio" className="mb-4 rounded" />
//           <h3 className="text-xl font-semibold mb-2">Developer Portfolio</h3>
//           <p className="text-gray-600">
//             A fast, animated single-page React app built with GSAP and custom design.
//           </p>
//         </div>

//         <div className="p-6 border rounded shadow">
//           <img src="/images/dashboard.jpg" alt="Admin Dashboard" className="mb-4 rounded" />
//           <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
//           <p className="text-gray-600">
//             Secure and scalable admin panel built with Next.js and MongoDB with JWT-based login.
//           </p>
//         </div>
//       </section> */}

//     </main>
//   );
// }


















// {/* <section className="grid md:grid-cols-3 gap-6">
//         <div className="p-6 border rounded shadow">Project Card 1</div>
//         <div className="p-6 border rounded shadow">Project Card 2</div>
//         <div className="p-6 border rounded shadow">Project Card 3</div>
//       </section> */}