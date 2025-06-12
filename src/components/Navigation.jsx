"use client"

import { motion } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Navigation({ currentPage, totalPages, onNext, onPrev, onGoTo }) {
    const pageNames = ["Welcome", "Memories", "Letter", "Celebration"]

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-2 sm:gap-4 bg-gradient-to-br from-indigo-900/5 via-white/10 to-zinc-900/5 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10 shadow-2xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {/* Previous button */}
                <motion.button
                    onClick={onPrev}
                    disabled={currentPage === 0}
                    className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.button>

                {/* Page indicators */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => onGoTo(i)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === currentPage
                                    ? "bg-gradient-to-r from-pink-400 to-purple-400 scale-125"
                                    : "bg-white/30 hover:bg-white/50"
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>

                {/* Page name */}
                <div className="text-white text-xs sm:text-sm font-medium min-w-[60px] sm:min-w-[80px] text-center">
                    {pageNames[currentPage]}
                </div>

                {/* Next button */}
                <motion.button
                    onClick={onNext}
                    disabled={currentPage === totalPages - 1}
                    className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.button>
            </motion.div>
        </div>
    )
}
