export default function WebDesignPage() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-gray-900 to-black py-20 px-6 text-center shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-4 text-white">Web Design Services</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We craft engaging, user-friendly, and modern web interfaces that connect with your audience and elevate your brand.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-white">Design Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[ 
            {
              title: "UI/UX Design",
              desc: "Clean interfaces designed for seamless user experience across all devices.",
            },
            {
              title: "Responsive Layouts",
              desc: "Mobile-first designs that adapt beautifully to all screen sizes.",
            },
            {
              title: "Landing Pages",
              desc: "Conversion-focused single pages crafted for marketing campaigns and products.",
            },
            {
              title: "Wireframes & Prototypes",
              desc: "Interactive prototypes and layout plans using Figma or Adobe XD.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition hover:scale-[1.02] duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-6 bg-gray-900 border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-10 text-white text-center">Design Tools & Frameworks</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Figma", "Adobe XD", "Tailwind CSS", "Material UI", "GSAP", "Framer Motion", "Canva"].map((tool, index) => (
            <span
              key={index}
              className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-full text-sm text-white shadow-sm hover:bg-gray-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">Our Design Process</h2>
          <ul className="space-y-5 text-gray-300 list-disc pl-5">
            <li><strong className="text-white">Brief & Strategy:</strong> Understanding your brand, goals, and user expectations.</li>
            <li><strong className="text-white">Wireframes:</strong> Low-fidelity planning of layouts and structure.</li>
            <li><strong className="text-white">Visual Design:</strong> Applying branding, colors, typography, and UI patterns.</li>
            <li><strong className="text-white">Prototype & Test:</strong> Clickable prototypes for preview and feedback.</li>
            <li><strong className="text-white">Handoff:</strong> Final design files shared with dev team or converted to code.</li>
          </ul>
        </div>

        {/* Right Side */}
        <img
          src="/Images/uiux.png"
          alt="Web Design Illustration"
          className="w-full h-[320px] object-cover rounded-xl shadow-xl border border-gray-700"
        />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="bg-gray-800 rounded-xl shadow-2xl p-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Let’s Design Your Dream Website</h2>
          <p className="mb-6 text-gray-400">
            Whether you're launching a startup or refreshing a brand — our designs are built to impress and convert.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Start a Design Project
          </a>
        </div>
      </section>
    </div>
  );
}








// export default function WebDesignPage() {
//   return (
//     <div className="bg-gray-800 text-white">
//       {/* Hero Section */}
//       <section className="bg-gray-200 py-16 px-6 border-b shadow-2xl">
//         <h1 className="text-4xl font-bold mb-4 text-center text-gray-600">Web Design Services</h1>
//         <p className="text-lg text-gray-600 text-center">
//           We craft engaging, user-friendly, and modern web interfaces that connect with your audience and elevate your brand.
//         </p>
//       </section>

//       {/* Features Grid */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10">Design Capabilities</h2>
//         <div className="grid md:grid-cols-2 gap-10">
//           {[
//             {
//               title: "UI/UX Design",
//               desc: "Clean interfaces designed for seamless user experience across all devices.",
//             },
//             {
//               title: "Responsive Layouts",
//               desc: "Mobile-first designs that adapt beautifully to all screen sizes.",
//             },
//             {
//               title: "Landing Pages",
//               desc: "Conversion-focused single pages crafted for marketing campaigns and products.",
//             },
//             {
//               title: "Wireframes & Prototypes",
//               desc: "Interactive prototypes and layout plans using Figma or Adobe XD.",
//             },
//           ].map((item, i) => (
//             <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-700">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tools Section (horizontal cards) */}
//       <section className="py-16 px-6 bg-white border-t">
//         <h2 className="text-3xl font-bold mb-10">Design Tools & Frameworks</h2>
//         <div className="flex flex-wrap justify-start gap-4">
//           {[
//             "Figma",
//             "Adobe XD",
//             "Tailwind CSS",
//             "Material UI",
//             "GSAP",
//             "Framer Motion",
//             "Canva",
//           ].map((tool, index) => (
//             <span
//               key={index}
//               className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-800 shadow-sm"
//             >
//               {tool}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Design Process - Left/Right Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side Text */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Our Design Process</h2>
//           <ul className="space-y-4 text-gray-700 list-disc pl-5">
//             <li><strong>Brief & Strategy:</strong> Understanding your brand, goals, and user expectations.</li>
//             <li><strong>Wireframes:</strong> Low-fidelity planning of layouts and structure.</li>
//             <li><strong>Visual Design:</strong> Applying branding, colors, typography, and UI patterns.</li>
//             <li><strong>Prototype & Test:</strong> Clickable prototypes for preview and feedback.</li>
//             <li><strong>Handoff:</strong> Final design files shared with dev team or converted to code.</li>
//           </ul>
//         </div>

//         {/* Right Side Image */}
//         <img
//           src="/images/uiux.png"
//           alt="Web Design Illustration"
//           className="w-full h-[300px] object-cover rounded-lg shadow"
//         />
//       </section>

//       {/* CTA Section - Card Style */}
//       <section className="py-16 px-6 bg-gray-100">
//         <div className="bg-white rounded-xl shadow-lg p-10 max-w-4xl mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-4">Let’s Design Your Dream Website</h2>
//           <p className="mb-6 text-gray-700">
//             Whether you're launching a startup or refreshing a brand — our designs are built to impress and convert.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
//           >
//             Start a Design Project
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

















// export default function WebDesignPage() {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="bg-indigo-700 text-white text-center py-16 px-4">
//         <h1 className="text-4xl font-bold mb-4">Web Design Services</h1>
//         <p className="text-lg max-w-2xl mx-auto">
//           We design clean, modern, and responsive interfaces that elevate user experience and boost brand identity.
//         </p>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">What We Design</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Landing Pages",
//               desc: "Visually striking and conversion-focused landing pages for campaigns and products.",
//             },
//             {
//               title: "Portfolio Websites",
//               desc: "Personal and professional portfolios built for showcasing skills, projects, and resumes.",
//             },
//             {
//               title: "Business Websites",
//               desc: "Clean, corporate websites with clear information architecture and strong brand appeal.",
//             },
//             {
//               title: "UI Kits & Components",
//               desc: "Reusable design systems and UI components for scalable product development.",
//             },
//             {
//               title: "Mobile-First Designs",
//               desc: "Fully responsive layouts that perform beautifully on all devices.",
//             },
//             {
//               title: "Wireframes & Prototypes",
//               desc: "Initial planning, mockups and interactive prototypes using Figma or Adobe XD.",
//             },
//           ].map((item, index) => (
//             <div key={index} className="border rounded-lg p-6 shadow hover:shadow-md transition">
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-700">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tools & Technologies */}
//       <section className="py-16 px-6 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-10">Tools We Use</h2>
//         <div className="flex flex-wrap justify-center gap-4 text-center">
//           {[
//             "Figma",
//             "Adobe XD",
//             "Tailwind CSS",
//             "Material UI",
//             "Framer Motion",
//             "Canva",
//             "GSAP",
//             "Responsive Design",
//             "UI/UX Patterns",
//           ].map((tool, index) => (
//             <span
//               key={index}
//               className="bg-white border px-4 py-2 rounded-full shadow text-sm text-gray-700"
//             >
//               {tool}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Our Design Process */}
//       <section className="py-16 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">Our Design Process</h2>
//         <ol className="space-y-6 list-decimal list-inside text-gray-700">
//           <li>
//             <strong>Discovery & Brand Understanding:</strong> We begin by understanding your audience, goals, and brand personality.
//           </li>
//           <li>
//             <strong>Wireframing & Planning:</strong> Layout plans and structural designs using Figma/Sketch.
//           </li>
//           <li>
//             <strong>Visual Design & Styling:</strong> Applying colors, typography, spacing, and design systems for consistency.
//           </li>
//           <li>
//             <strong>Prototyping & Feedback:</strong> Interactive prototypes shared for real-time feedback and improvements.
//           </li>
//           <li>
//             <strong>Handoff to Development:</strong> Clean handoff with ready components or seamless integration with frontend team.
//           </li>
//         </ol>
//       </section>

//       {/* CTA */}
//       <section className="py-16 bg-indigo-600 text-white text-center px-6">
//         <h2 className="text-3xl font-bold mb-4">Need an Impactful Design?</h2>
//         <p className="mb-6">Let’s craft a beautiful and effective user experience together.</p>
//         <a
//           href="/contact"
//           className="inline-block bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-100"
//         >
//           Request a Design
//         </a>
//       </section>
//     </div>
//   );
// }





// // export default function WebDesignPage() {
// //   return (
// //     <div className="px-6 py-10">
// //       <h2 className="text-3xl font-bold mb-4">Web Design Services</h2>
// //       <p className="text-gray-700 mb-4">
// //         We craft responsive, clean, and beautiful UI using Tailwind CSS, MUI, Figma, and best design principles.
// //       </p>
// //     </div>
// //   );
// // }





// // export default function WebDesign() {
// //   return <h2 className="text-xl font-bold">Web Design Services</h2>;
// // }
