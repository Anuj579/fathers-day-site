"use client"

import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"

export default function PhotoGallery() {
    const photos = [
        {
            src: "/1.png",
            caption: "Our first adventure together",
        },
        {
            src: "/1.png",
            caption: "Teaching me to ride a bike",
        },
        {
            src: "/1.png",
            caption: "Family vacation memories",
        },
        {
            src: "/1.png",
            caption: "Graduation day pride",
        },
        {
            src: "/1.png",
            caption: "Just being silly together",
        },
    ]

    return (
        <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4">
            <motion.div
                className="max-w-6xl mx-auto text-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Title */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent px-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Our Beautiful Memories
                </motion.h2>

                <motion.p
                    className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 font-light px-4 max-w-2xl mx-auto"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Every moment with you is a treasure that I hold close to my heart
                </motion.p>

                {/* Photo gallery with cards effect */}
                <motion.div
                    className="w-full max-w-xs sm:max-w-sm mx-auto mb-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards, Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        className="w-72 h-96 sm:w-80 sm:h-[26rem]"
                    >
                        {photos.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-3xl p-1 shadow-2xl">
                                    <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden flex flex-col">
                                        <div className="flex-1 overflow-hidden">
                                            <img
                                                src={photo.src || "/placeholder.svg"}
                                                alt={photo.caption}
                                                className="w-auto h-auto object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6 text-center bg-gradient-to-t from-gray-900 to-transparent">
                                            <p className="text-white text-sm sm:text-base font-medium leading-relaxed">{photo.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Simple decoration */}
                <motion.div
                    className="text-3xl sm:text-4xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.span
                        animate={{
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        📷
                    </motion.span>
                </motion.div>
            </motion.div>
        </section>
    )
}
