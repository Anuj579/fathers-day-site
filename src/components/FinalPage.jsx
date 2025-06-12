"use client"

import { motion } from "motion/react"
import { useEffect } from "react"
import confetti from "canvas-confetti"

export default function FinalPage() {
  // Auto-trigger confetti when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      // Create a beautiful confetti effect
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // Create confetti from multiple points
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd"],
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#ff9ff3", "#54a0ff", "#5f27cd", "#00d2d3", "#ff9f43", "#ee5a24"],
        })
      }, 250)

      return () => clearInterval(interval)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleCelebrate = () => {
    // Manual confetti trigger
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd", "#ff9ff3", "#54a0ff"],
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4">
      <motion.div
        className="text-center max-w-5xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main title */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-1.5 font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Happy Father's Day!
        </motion.h2>

        {/* Celebration emoji */}
        <motion.div
          className="text-6xl sm:text-7xl mb-6 sm:mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.span
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            🎉
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light px-4 max-w-3xl mx-auto"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          You are the best dad in the world, and I'm so lucky to be your child
        </motion.p>

        {/* Love message */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-pink-400 mb-8 font-semibold px-4"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          With all my love and gratitude ❤️
        </motion.p>

        {/* Signature */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-purple-400 mb-8 font-medium px-4"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          - Your Loving Child
        </motion.p>

        {/* Celebration button */}
        <motion.button
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 sm:mb-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCelebrate}
        >
          Celebrate More! 🎊
        </motion.button>

        {/* Thank you message */}
        <motion.div
          className="p-6 sm:p-8 bg-gradient-to-r from-gray-800/20 to-purple-800/20 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-purple-500/20 mx-4 sm:mx-0"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Thank you for being the amazing father you are. Your love, guidance, and support mean everything to me.
            <br />
            <span className="text-pink-400 font-medium">Happy Father's Day, Dad!</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
