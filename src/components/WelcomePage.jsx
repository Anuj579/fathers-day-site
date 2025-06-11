"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"

export default function WelcomePage({ onStartMusic }) {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="text-center max-w-4xl mx-auto w-full">
                {/* Main dad emoji */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 1,
                    }}
                    className="mb-8 sm:mb-12"
                >
                    <motion.div
                        className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] mb-4 sm:mb-6 filter drop-shadow-lg"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        👨‍👧‍👦
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent px-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                >
                    For the Best Dad
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed font-light px-4 max-w-3xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                >
                    Thank you for being my hero, my guide, and my biggest supporter.
                    <br className="hidden sm:block" />
                    <span className="text-pink-400 font-medium block sm:inline mt-2 sm:mt-0">
                        This is something special to show how much you mean to me.
                    </span>
                </motion.p>

                {/* Start button */}
                <motion.button
                    className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onStartMusic}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                    <span className="relative z-10">Start the Journey</span>
                </motion.button>

                {/* Simple gift */}
                <motion.div
                    className="mt-8 sm:mt-12 text-4xl sm:text-5xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <motion.span
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 2, -2, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        💝
                    </motion.span>
                </motion.div>
            </div>
        </section>
    )
}
