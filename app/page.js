// import { Hero } from "@/hero/page";

import About from "@/app/about/page";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <Carousel />
      {/* <About /> */}

      {/* Section 1 */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">We Are Digital Builders</h2>
          <p className="text-gray-400">
            We are a team of full stack developers crafting scalable, fast, and secure web apps using MERN stack and Next.js. Our mission is to empower businesses through modern, efficient digital solutions.
          </p>
        </div>
        <img src="/Images/teamwork.webp" alt="Team at work" className="rounded-lg shadow w-full h-[300px] object-cover" />
      </section>

      {/* Section 2 */}
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

      {/* Section 3 */}
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

      {/* Section 4 - Testimonials */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl text-gray-600 font-bold mb-8">What Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-gray-700 text-lg">
          {'"Their web development skills are top-notch! Delivered a fully functional Web Site in record time."'}
          <footer className="mt-4 text-gray-500">
            — <a href="https://rameezbabar.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
              Rameez Ahmed, GBP Expert.
            </a>
          </footer>
        </blockquote>
      </section>

      {/* Section 5 - CTA */}
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



















// // import { Hero } from "@/hero/page";

// import About from "@/app/about/page";
// import Carousel from "./components/Carousel";

// export default function Home() {
//   return (
//     <div>
//       {/* <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
//       <p>This is a simple Next.js frontend demo.</p> */}
//       {/* <Hero /> */}
//       <Carousel />
//       {/* <About /> */}



//       <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//   <div>
//     <h2 className="text-3xl font-bold mb-4">We Are Digital Builders</h2>
//     <p className="text-gray-400">
//       We are a team of full stack developers crafting scalable, fast, and secure web apps using MERN stack and Next.js. Our mission is to empower businesses through modern, efficient digital solutions.
//     </p>
//   </div>
//   <img src="/images/teamwork.webp" alt="Team at work" className="rounded-lg shadow w-full h-[300px] object-cover" />
// </section>







// <section className="py-16 px-6 bg-gray-700">
//   <h2 className="text-white text-3xl font-bold text-center mb-10">Our Core Services</h2>
//   <div className="text-gray-700 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//     {[
//       { title: "Web Development", desc: "I create custom websites using modern technologies. My goal is to build fast, responsive, and user-friendly web applications.", icon: "💻" },
//       { title: "UI/UX Design", desc: "I design clean and user-friendly interfaces that are easy to use and visually appealing. My goal is to create layouts that feel simple and smooth.", icon: "🎨" },
//       { title: "API Integration", desc: "I connect websites with external services to add features like payments, logins, and real-time data. This makes your site more powerful and interactive", icon: "🔗" },
//     ].map((item, i) => (
//       <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center">
//         <div className="text-4xl mb-4">{item.icon}</div>
//         <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//         <p className="text-gray-600">{item.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>




// <section className="py-16 px-6 max-w-6xl mx-auto">
//   <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//     {[
//       "⚡ Fast Performance",
//       "🔐 Secure Architecture",
//       "📱 Mobile-First Design",
//       "🧩 Scalable Codebase",
//       "🛠️ Post-launch Support",
//       "🌐 SEO Optimized",
//     ].map((point, index) => (
//       <div key={index} className="bg-white text-black text-center border p-6 rounded-lg shadow-sm text-lg">
//         {point}
//       </div>
//     ))}
//   </div>
// </section>






// <section className="py-16 bg-gray-200 text-center">
//   <h2 className="text-3xl text-gray-600 font-bold mb-8">What Clients Say</h2>
//   <blockquote className="max-w-3xl mx-auto italic text-gray-700 text-lg">
//     "Their web development skills are top-notch! Delivered a fully functional Web Site in record time."
//     <footer className="mt-4 text-gray-500">
//       — <a href="https://rameezbabar.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
//         Rameez Ahmed, GBP Expert.
//       </a>
//     </footer>
//   </blockquote>
// </section>




// <section className="py-16 bg-indigo-600 text-white text-center">
//   <h2 className="text-3xl font-bold mb-4">Ready to Build Something Awesome?</h2>
//   <p className="mb-6">Let’s discuss your project and bring it to life.</p>
//   <a href="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-100">
//     Get In Touch
//   </a>
// </section>


//     </div>
//   );
// }
