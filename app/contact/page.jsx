"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMsg("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/ashfaqahmedazad@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMsg("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("Failed to send. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {responseMsg && (
          <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">
            {responseMsg}
          </p>
        )}
      </form>
    </section>
  );
}




















// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponse("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setResponse("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setResponse("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setResponse("Failed to send. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="max-w-xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//         Contact Us
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
//             Name
//           </label>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Your name"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="you@example.com"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
//             Message
//           </label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={5}
//             className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Write your message here..."
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition disabled:opacity-50"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>

//         {response && (
//           <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">
//             {response}
//           </p>
//         )}
//       </form>
//     </section>
//   );
// }
