"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Ball {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  emoji: string
  velocityX: number
  velocityY: number
}

interface InteractiveOverlayProps {
  onGetStarted: () => void
}

export function InteractiveOverlay({ onGetStarted }: InteractiveOverlayProps) {
  const [balls, setBalls] = useState<Ball[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const animationFrameId = useRef<number>()

  useEffect(() => {
    // Initialize balls
    const initialBalls: Ball[] = [
      { id: 1, x: 20, y: 30, vx: 0.5, vy: 0.3, emoji: "🏀", velocityX: 0, velocityY: 0 },
      { id: 2, x: 70, y: 20, vx: -0.4, vy: 0.5, emoji: "⚽", velocityX: 0, velocityY: 0 },
      { id: 3, x: 80, y: 70, vx: 0.3, vy: -0.4, emoji: "🏈", velocityX: 0, velocityY: 0 },
      { id: 4, x: 30, y: 80, vx: -0.5, vy: -0.3, emoji: "⚾", velocityX: 0, velocityY: 0 },
    ]
    setBalls(initialBalls)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      setBalls((prevBalls) => {
        return prevBalls.map((ball) => {
          let newX = ball.x + ball.vx + ball.velocityX
          let newY = ball.y + ball.vy + ball.velocityY
          let newVx = ball.vx
          let newVy = ball.vy

          // Bounce off edges
          if (newX <= 5 || newX >= 95) {
            newVx = -newVx
            newX = newX <= 5 ? 5 : 95
          }
          if (newY <= 5 || newY >= 95) {
            newVy = -newVy
            newY = newY <= 5 ? 5 : 95
          }

          // Calculate distance from mouse
          const ballScreenX = (newX / 100) * window.innerWidth
          const ballScreenY = (newY / 100) * window.innerHeight
          const dx = mousePos.x - ballScreenX
          const dy = mousePos.y - ballScreenY
          const distance = Math.sqrt(dx * dx + dy * dy)

          let newVelocityX = ball.velocityX * 0.95 // Friction
          let newVelocityY = ball.velocityY * 0.95

          // If mouse is close, push the ball away
          if (distance < 150) {
            const force = (150 - distance) / 150
            const angle = Math.atan2(dy, dx)
            newVelocityX -= Math.cos(angle) * force * 2
            newVelocityY -= Math.sin(angle) * force * 2
          }

          return {
            ...ball,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
          }
        })
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [mousePos])

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#1e293b] via-slate-800 to-[#0f172a] flex items-center justify-center overflow-hidden"
    >
      {/* Floating Balls */}
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute text-6xl md:text-8xl pointer-events-none select-none"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          {ball.emoji}
        </motion.div>
      ))}

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff7200] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      {/* Get Started Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Welcome to HOOPS
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Honor • Opportunity • Overcome • Play • Strength
        </motion.p>
        <Button
          onClick={onGetStarted}
          size="lg"
          className="bg-[#ff7200] hover:bg-orange-600 text-white font-bold text-xl px-12 py-8 h-auto shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all hover:scale-105"
        >
          Get Started
        </Button>
        <p className="mt-6 text-slate-400 text-sm">{"Move your cursor to interact with the sports balls"}</p>
      </motion.div>
    </motion.div>
  )
}
