"use client"

import { motion } from "motion/react"

export default function Letter() {
    return (
        <section className="h-screen flex items-center justify-center py-8 sm:py-12 px-4 pb-24">
            <motion.div
                className="max-w-4xl mx-auto w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="text-3xl py-1 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent px-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    A Letter From My Heart
                </motion.h2>

                <motion.div
                    className="bg-gradient-to-br from-gray-800/20 via-purple-900/10 to-gray-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-purple-500/10 shadow-2xl relative mx-4 sm:mx-0 h-[85%] xl:h-max overflow-y-scroll xl:overflow-hidden"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="text-left mb-6 sm:mb-8">
                        <motion.p
                            className="text-gray-400 italic text-lg sm:text-xl font-light"
                            initial={{ x: 15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Dear Dad,
                        </motion.p>
                    </div>

                    <motion.div
                        className="space-y-4 sm:space-y-6 text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl font-light"
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <motion.p
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            Words cannot express how grateful I am to have you as my father. You've been my rock, my inspiration, and
                            my biggest cheerleader through every step of my journey.
                        </motion.p>

                        <motion.p
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            From teaching me to tie my shoes to helping me navigate life's biggest challenges, you've always been
                            there with patience, wisdom, and unconditional love.
                        </motion.p>

                        <motion.p
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                        >
                            Your strength has shown me how to be resilient, your kindness has taught me compassion, and your humor has
                            filled our home with laughter and joy.
                        </motion.p>

                        <motion.p
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.6, duration: 0.5 }}
                        >
                            Thank you for all the sacrifices you've made, the dreams you've helped me chase, and the love you've given
                            so freely. I am who I am today because of you.
                        </motion.p>

                        <motion.p
                            className="text-pink-400 font-semibold text-xl sm:text-2xl md:text-3xl text-center py-4"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                        >
                            I love you more than words can say, Dad!
                        </motion.p>
                    </motion.div>

                    <div className="text-right mt-8 sm:m">
                        <motion.p
                            className="text-purple-400 font-semibold text-lg sm:text-xl md:text-2xl"
                            initial={{ x: 15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            With all my love,
                            <br />
                            <span className="text-pink-400">Your Child</span>❤️
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
