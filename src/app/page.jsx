"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import WelcomePage from "@/components/WelcomePage"
import PhotoGallery from "@/components/PhotoGallery"
import Letter from "@/components/Letter"
import FinalPage from "@/components/FinalPage"
import MusicControls from "@/components/MusicControls"
import Navigation from "@/components/Navigation"

const pages = [
  { id: "welcome", component: WelcomePage },
  { id: "photos", component: PhotoGallery },
  { id: "letter", component: Letter },
  { id: "final", component: FinalPage },
]

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [musicStarted, setMusicStarted] = useState(false)
  const [screenWidth, setScreenWidth] = useState(1000);
  const [hearts, setHearts] = useState([]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1)
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (index) => {
    setDirection(index > currentPage ? 1 : -1)
    setCurrentPage(index)
  }

  const startMusic = () => {
    setMusicStarted(true)
    nextPage()
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (screenWidth !== 1000) {
      const heartData = [...Array(6)].map(() => ({
        startX: Math.random() * screenWidth,
        endX: Math.random() * screenWidth,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }));
      setHearts(heartData);
    }
  }, [screenWidth]);

  const CurrentComponent = pages[currentPage].component

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white overflow-hidden relative font-inter">
      {/* Subtle background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-44 h-44 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {hearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400/20 text-2xl"
            initial={{ y: "100vh", x: heart.startX }}
            animate={{ y: "-10vh", x: heart.endX }}
            transition={{
              duration: heart.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: heart.delay,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Uncomment if you want to add a song/voice */}
      {/* {musicStarted && currentPage > 0 && <MusicControls />} */}

      {currentPage > 0 && (
        <Navigation
          currentPage={currentPage}
          totalPages={pages.length}
          onNext={nextPage}
          onPrev={prevPage}
          onGoTo={goToPage}
        />
      )}

      <main className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 200 : -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -200 : 200,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.5,
            }}
            className="min-h-screen"
          >
            <CurrentComponent onStartMusic={startMusic} musicStarted={musicStarted} />
          </motion.div>
        </AnimatePresence>
      </main>
      {/* Watermark */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-xs text-white/50 pointer-events-none select-none z-50 font-light">
        @anujbuilds
      </motion.div>
    </div>
  )
}
