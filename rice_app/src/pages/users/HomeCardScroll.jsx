
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { MousePointer, Pointer, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/autoplay";

const products = [
  {
    title: "Basmati Rice",
    price: "₹424.00",
    discount: "-24%",
    rating: 4.5,
    reviews: 6566,
    img: "https://m.media-amazon.com/images/I/61luvSZNl6L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Organic Brown Rice",
    price: "₹440.00",
    discount: "-27%",
    rating: 4.0,
    reviews: 91,
    img: "https://m.media-amazon.com/images/I/71Rv0PD11iL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Sona Masoori Rice",
    price: "₹799.00",
    discount: "-5%",
    rating: 4.3,
    reviews: 615,
    img: "https://m.media-amazon.com/images/I/616jugtgaCL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Indrayani White Rice",
    price: "₹350.00",
    discount: "-13%",
    rating: 4.1,
    reviews: 51,
    img: "https://m.media-amazon.com/images/I/71Lr0+riOaL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Hand Pound Raw Rice",
    price: "₹623.00",
    discount: "-17%",
    rating: 4.2,
    reviews: 119,
    img: "https://m.media-amazon.com/images/I/71bMZx-HxNL._AC_UL480_FMwebp_QL65_.jpg",
  },
];

const HomeCardScroll = () => {
  return (
    <div className="w-full px-4 py-10 bg-white my-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        🔥 Trending Rice Products
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="p-4 w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover" width={"100%"} height={"250px"}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <div className="text-green-600 font-medium">{item.discount} OFF</div>
                <div className="text-xl font-bold text-gray-900">{item.price}</div>
                <div className="flex items-center mt-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.round(item.rating) ? "#facc15" : "none"}
                      stroke="#facc15"
                      className="mr-1"
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">({item.reviews})</span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCardScroll;
