// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/react";

// const TestimonialCarousel = ({ testimonials }) => {
//   return (
//     <Swiper
//       // Install modules
//       modules={[Pagination, Navigation]}
//       spaceBetween={50}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//       navigation={true}
//     >
//       {testimonials.map((testimonial, index) => (
//         <SwiperSlide key={index}>
//           <div className="testimonialItem">
//             <img
//               src={testimonial.avatar}
//               alt="Testimonial avatar"
//               className="testimonialAvatar"
//             />
//             <h3 className="testimonialName">{testimonial.name}</h3>
//             <p className="testimonialText">{testimonial.review}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default TestimonialCarousel;
