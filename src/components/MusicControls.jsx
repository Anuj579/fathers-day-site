"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Volume2, VolumeX } from "lucide-react"

export default function MusicControls() {
    const [isPlaying, setIsPlaying] = useState(true)
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Adjust the song volume here
            if (isPlaying) {
                audioRef.current.play().catch(console.error)
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <motion.div
            className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <motion.button
                onClick={toggleMusic}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white p-3 sm:p-4 rounded-full shadow-xl border border-white/10 transition-all duration-300"
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {/* Change the audio src accordingly */}
                <audio ref={audioRef} src="/bg.mp3" loop preload="auto" />
                <div>
                    {isPlaying ? <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
            </motion.button>
        </motion.div>
    )
}