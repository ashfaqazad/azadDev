export default function WebDevPage() {
  return (
    <div className="bg-[#0c0c1d] text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 via-[#111827] to-teal-800 py-20 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white">Web Development Services</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          From strategy to deployment — we build scalable and secure applications tailored for your goals.
        </p>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-white">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Full Stack Development",
              desc: "MERN stack and Next.js for powerful full-stack solutions.",
            },
            {
              title: "Authentication Systems",
              desc: "JWT, OAuth2, Admin access and Role-based control.",
            },
            {
              title: "REST APIs & Backend",
              desc: "Fast APIs with MongoDB & Express, deployed to cloud.",
            },
            {
              title: "E-Commerce Systems",
              desc: "Carts, Checkout, Stripe integration and Orders.",
            },
            {
              title: "Admin Panels & Dashboards",
              desc: "Custom dashboards with CRUD, charts & filtering.",
            },
            {
              title: "Performance & SEO",
              desc: "Speed optimized, SEO-ready and accessible apps.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#14141f] border border-[#2a2a40] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-teal-500"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-[#121212] border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-10">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "MUI",
            "JWT",
            "OAuth",
            "Stripe",
            "Cloudinary",
            "Firebase",
            "Vercel",
            "Netlify",
          ].map((tech, index) => (
            <span
              key={index}
              className="bg-[#1f1f2e] text-white px-4 py-2 text-sm rounded-full border border-gray-700 hover:bg-teal-600 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">How We Work</h2>
        <ol className="space-y-6 text-gray-300 list-decimal list-inside">
          <li><strong className="text-white">Discovery & Planning:</strong> Understand goals, target users & features.</li>
          <li><strong className="text-white">UI/UX Design:</strong> Create wireframes, flows & responsive layout in Figma/Tailwind.</li>
          <li><strong className="text-white">Development:</strong> Build scalable frontend + backend with modern stack.</li>
          <li><strong className="text-white">Optimization:</strong> Page speed, SEO & accessibility testing.</li>
          <li><strong className="text-white">Deployment:</strong> Deploy on Vercel, with complete handover & support.</li>
        </ol>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a1a2e] to-[#0f172a] backdrop-blur-md text-white text-center">
        <div className="bg-white/5 p-10 max-w-3xl mx-auto rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
          <p className="mb-6 text-gray-300">Tell us your idea and let our team craft the solution — scalable, fast and secure.</p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

















// export default function WebDevPage() {
//   return (
//     <div className="bg-gray-950 text-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-900 via-gray-900 to-black text-white text-center py-20 px-6 shadow-2xl">
//         <h1 className="text-5xl font-extrabold mb-4">Web Development Services</h1>
//         <p className="text-lg max-w-2xl mx-auto text-gray-300">
//           From idea to deployment — we build fast, scalable, and secure web applications tailored to your business.
//         </p>
//       </section>

//       {/* Features Grid */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-10 text-white">What We Offer</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Full Stack Development",
//               desc: "MERN stack and Next.js for building powerful front-to-back solutions.",
//             },
//             {
//               title: "Authentication Systems",
//               desc: "Secure login, JWT, OAuth2, admin access & role-based systems.",
//             },
//             {
//               title: "REST APIs & Backend",
//               desc: "Scalable Express APIs with MongoDB integration and cloud deployment.",
//             },
//             {
//               title: "E-Commerce Systems",
//               desc: "Shopping carts, Stripe/PayPal integration, admin dashboards, order systems.",
//             },
//             {
//               title: "Admin Panels & Dashboards",
//               desc: "Visual dashboards with analytics, CRUD, filters & responsive UI.",
//             },
//             {
//               title: "Performance & SEO",
//               desc: "Optimized pages for speed, SEO, Core Web Vitals, and accessibility.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition hover:scale-[1.02] duration-300 ease-in-out"
//             >
//               <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
//               <p className="text-gray-300">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tech Stack */}
//       <section className="py-20 px-6 bg-gray-900">
//         <h2 className="text-4xl font-bold text-center mb-10 text-white">Tech Stack We Use</h2>
//         <div className="flex flex-wrap justify-center gap-4 text-center">
//           {[
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MongoDB",
//             "Tailwind CSS",
//             "MUI",
//             "JWT & OAuth",
//             "Stripe",
//             "Cloudinary",
//             "Vercel",
//             "Netlify",
//             "Firebase",
//           ].map((tech, index) => (
//             <span
//               key={index}
//               className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-white shadow-sm hover:bg-gray-700"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Development Process */}
//       <section className="py-20 px-6 max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-10 text-white">How We Work</h2>
//         <ol className="space-y-6 list-decimal list-inside text-gray-300">
//           <li>
//             <strong className="text-white">Discovery & Planning:</strong> Understanding your goals, audience, and functionality needs.
//           </li>
//           <li>
//             <strong className="text-white">UI/UX Design:</strong> Wireframes, layout planning, and responsive designs using Tailwind or MUI.
//           </li>
//           <li>
//             <strong className="text-white">Frontend & Backend Development:</strong> React + Next.js on frontend and Express + MongoDB on backend.
//           </li>
//           <li>
//             <strong className="text-white">Testing & Optimization:</strong> Device testing, speed optimization, SEO configuration.
//           </li>
//           <li>
//             <strong className="text-white">Deployment & Handover:</strong> Launch on Vercel/Netlify, and handover with support.
//           </li>
//         </ol>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-indigo-800 to-indigo-900 text-white text-center px-6">
//         <h2 className="text-3xl font-bold mb-4">Ready to Build Something Powerful?</h2>
//         <p className="mb-6 text-gray-200">Contact us today to turn your vision into a digital solution.</p>
//         <a
//           href="/contact"
//           className="inline-block bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
//         >
//           Get In Touch
//         </a>
//       </section>
//     </div>
//   );
// }






















// // export default function WebDevPage() {
// //   return (
// //     <div className="bg-white text-gray-900">
// //       {/* Hero Section */}
// //       <section className="bg-sky-700 text-white text-center py-16 px-4">
// //         <h1 className="text-4xl font-bold mb-4">Web Development Services</h1>
// //         <p className="text-lg max-w-2xl mx-auto">
// //           From idea to deployment — we build fast, scalable, and secure web applications tailored to your business.
// //         </p>
// //       </section>

// //       {/* Features Grid */}
// //       <section className="py-16 px-6 max-w-6xl mx-auto">
// //         <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {[
// //             {
// //               title: "Full Stack Development",
// //               desc: "MERN stack and Next.js for building powerful front-to-back solutions.",
// //             },
// //             {
// //               title: "Authentication Systems",
// //               desc: "Secure login, JWT, OAuth2, admin access & role-based systems.",
// //             },
// //             {
// //               title: "REST APIs & Backend",
// //               desc: "Scalable Express APIs with MongoDB integration and cloud deployment.",
// //             },
// //             {
// //               title: "E-Commerce Systems",
// //               desc: "Shopping carts, Stripe/PayPal integration, admin dashboards, order systems.",
// //             },
// //             {
// //               title: "Admin Panels & Dashboards",
// //               desc: "Visual dashboards with analytics, CRUD, filters & responsive UI.",
// //             },
// //             {
// //               title: "Performance & SEO",
// //               desc: "Optimized pages for speed, SEO, Core Web Vitals, and accessibility.",
// //             },
// //           ].map((item, index) => (
// //             <div key={index} className="border rounded-lg p-6 shadow hover:shadow-md transition items-center"
// //             style={{ boxShadow: "0 8px 20px rgba(0, 0, 255, 0.2)" }}
// //             >
// //               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
// //               <p className="text-gray-700">{item.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Tech Stack */}
// //       <section className="py-16 px-6 bg-gray-100">
// //         <h2 className="text-3xl font-bold text-center mb-10">Tech Stack We Use</h2>
// //         <div className="flex flex-wrap justify-center gap-4 text-center">
// //           {[
// //             "React.js",
// //             "Next.js",
// //             "Node.js",
// //             "Express.js",
// //             "MongoDB",
// //             "Tailwind CSS",
// //             "MUI",
// //             "JWT & OAuth",
// //             "Stripe",
// //             "Cloudinary",
// //             "Vercel",
// //             "Netlify",
// //             "Firebase",
// //           ].map((tech, index) => (
// //             <span
// //               key={index}
// //               className="bg-white border px-4 py-2 rounded-full shadow text-sm text-gray-700"
// //             >
// //               {tech}
// //             </span>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Development Process */}
// //       <section className="py-16 px-6 max-w-5xl mx-auto">
// //         <h2 className="text-3xl font-bold text-center mb-10">How We Work</h2>
// //         <ol className="space-y-6 list-decimal list-inside text-gray-700">
// //           <li>
// //             <strong>Discovery & Planning:</strong> Understanding your goals, audience, and functionality needs.
// //           </li>
// //           <li>
// //             <strong>UI/UX Design:</strong> Wireframes, layout planning, and responsive designs using Tailwind or MUI.
// //           </li>
// //           <li>
// //             <strong>Frontend & Backend Development:</strong> React + Next.js on frontend and Express + MongoDB on backend.
// //           </li>
// //           <li>
// //             <strong>Testing & Optimization:</strong> Device testing, speed optimization, SEO configuration.
// //           </li>
// //           <li>
// //             <strong>Deployment & Handover:</strong> Launch on Vercel/Netlify, and handover with support.
// //           </li>
// //         </ol>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-16 bg-indigo-600 text-white text-center px-6">
// //         <h2 className="text-3xl font-bold mb-4">Ready to Build Something Powerful?</h2>
// //         <p className="mb-6">Contact us today to turn your vision into a digital solution.</p>
// //         <a
// //           href="/contact"
// //           className="inline-block bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-100"
// //         >
// //           Get In Touch
// //         </a>
// //       </section>
// //     </div>
// //   );
// // }












// // export default function WebDevPage() {
// //   return (
// //     <div className="px-6 py-10">
// //       <h2 className="text-3xl font-bold mb-4">Web Development Services</h2>
// //       <ul className="list-disc pl-5 text-gray-700">
// //         <li>Full Stack Development using MERN & Next.js</li>
// //         <li>Authentication (JWT, OAuth)</li>
// //         <li>Admin Panels, Dashboards, REST APIs</li>
// //         <li>Stripe Payments, MongoDB, Performance</li>
// //       </ul>
// //     </div>
// //   );
// // }




// // // export default function SEO() {
// // //   return <h2 className="text-xl font-bold">SEO Services</h2>;
// // // }
