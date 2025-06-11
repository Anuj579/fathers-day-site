"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Volume2, VolumeX } from "lucide-react"

export default function MusicControls() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        // Create and start audio
        audioRef.current = new Audio("/placeholder-audio.mp3")
        audioRef.current.loop = true
        audioRef.current.volume = 0.5
        audioRef.current.play().catch(console.error)

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
                setIsPlaying(false)
            } else {
                audioRef.current.play().catch(console.error)
                setIsPlaying(true)
            }
        }
    }

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const handleClick = () => {
        if (isMuted) {
            toggleMute()
        } else {
            toggleMusic()
        }
    }

    return (
        <motion.div
            className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <motion.button
                onClick={handleClick}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white p-3 sm:p-4 rounded-full shadow-xl border border-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={isMuted ? "Unmute" : isPlaying ? "Pause Music" : "Play Music"}
            >
                <motion.div
                    animate={isPlaying && !isMuted ? { rotate: 360 } : { rotate: 0 }}
                    transition={{
                        duration: 3,
                        repeat: isPlaying && !isMuted ? Number.POSITIVE_INFINITY : 0,
                        ease: "linear",
                    }}
                >
                    {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                </motion.div>
            </motion.button>
        </motion.div>
    )
}