"use client";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// const slides = [
//   {
//     image: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
//     title: "Modern Analytics Dashboard",
//     description: "A sleek, dark-mode dashboard showcasing real-time graphs and metrics — perfect for a modern web application or admin panel",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1920&q=80",
//     title: "Modern Developer Workspace",
//     description: "Clean and modern desk setup for creative work",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80",
//     title: "Dark Mode Coding Session",
//     description: "A night-mode code editor setup, great for representing JavaScript or MERN development sessions.",
//   },
// ];


const slides = [
  // {
  //   image: "https://images.unsplash.com/photo-1581093588401-4ca32b1a3a3c?auto=format&fit=crop&w=1200&q=80",
  //   title: "Innovation at Work",
  //   description: "Transforming ideas into digital reality",
  // },
  {
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1920&q=80",
    title: "Modern Developer Workspace",
    description: "Clean and modern desk setup for creative work",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    title: "Creative Solutions",
    description: "Tailored approaches for modern challenges",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "Future Forward",
    description: "Leading the way in digital transformation",
  },
];






const Carousel = () => {
  return (
    <Box sx={{ width: "100%", mx: "auto", mt: 0, overflow: "auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: 250,
                  sm: 350,
                  md: "90vh",
                },
              }}
            >
              <Box
                component="img"
                src={slide.image}
                alt={slide.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />

              {/* Overlay Text */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4" fontWeight="bold" mb={1}>
                  {slide.title}
                </Typography>
                <Typography variant="body1">{slide.description}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;

















// "use client";
// import { Box } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // const images = [
// //   "/Images/PizzaSlider.jpg",
// //   "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
// //   "https://images.unsplash.com/photo-1576867757603-05b134ebc379",
// // ];


// const slides = [
//   {
//     image: "https://images.unsplash.com/photo-1736710744799-4ba71f73cf73",
//     title: "Innovation at Work",
//     description: "Transforming ideas into digital reality",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1736710744795-61318ee79085",
//     title: "Creative Solutions",
//     description: "Tailored approaches for modern challenges",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1736710744631-60252a614e16",
//     title: "Future Forward",
//     description: "Leading the way in digital transformation",
//   },
// ];

// const Carousel = () => {
//   return (
//     <Box sx={{ width: "100%", mx: "auto", mt: 0, overflow: "auto" }}>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         loop={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <Box
//               component="img"
//               src={img}
//               alt={`Slide ${index + 1}`}
//               sx={{
//                 width: "100%",
//                 height: {
//                   xs: 200,   // Mobile
//                   sm: 300,   // Tablets
//                   md: "90vh", // Desktop
//                 },
//                 objectFit: "cover",
//                 borderRadius: 2,
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default Carousel;


