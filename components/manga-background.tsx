"use client"

import { useEffect, useRef } from "react"

export function MangaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation state
    let animationFrame: number
    let time = 0

    // Speed lines
    const speedLines: Array<{ x: number; y: number; length: number; angle: number; speed: number }> = []
    for (let i = 0; i < 15; i++) {
      speedLines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3, // Upper third for sky
        length: 20 + Math.random() * 40,
        angle: Math.random() * Math.PI * 0.3 + Math.PI * 0.85, // Slight downward angle
        speed: 0.2 + Math.random() * 0.3,
      })
    }

    // Floating leaves
    const leaves: Array<{ x: number; y: number; size: number; rotation: number; speedX: number; speedY: number }> = []
    for (let i = 0; i < 8; i++) {
      leaves.push({
        x: Math.random() * canvas.width,
        y: canvas.height * 0.6 + Math.random() * canvas.height * 0.4,
        size: 3 + Math.random() * 4,
        rotation: Math.random() * Math.PI * 2,
        speedX: -0.1 - Math.random() * 0.2,
        speedY: -0.05 - Math.random() * 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Check theme dynamically
      const isDarkMode = document.documentElement.classList.contains("dark")
      const currentStrokeColor = isDarkMode ? "#e2e8f0" : "#1e293b"
      const currentFillColor = isDarkMode ? "#e2e8f0" : "#1e293b"
      const currentLeafColor = isDarkMode ? "#94a3b8" : "#475569"
      
      // Set drawing style
      ctx.strokeStyle = currentStrokeColor
      ctx.fillStyle = currentFillColor
      ctx.lineWidth = 1.5
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      // Draw trees on edges (sketch style)
      const treeWidth = canvas.width * 0.15
      const treeHeight = canvas.height * 0.4

      // Left tree
      ctx.beginPath()
      ctx.moveTo(treeWidth * 0.2, canvas.height)
      ctx.lineTo(treeWidth * 0.1, canvas.height - treeHeight * 0.3)
      ctx.lineTo(treeWidth * 0.3, canvas.height - treeHeight * 0.5)
      ctx.lineTo(treeWidth * 0.15, canvas.height - treeHeight * 0.7)
      ctx.lineTo(treeWidth * 0.35, canvas.height - treeHeight * 0.85)
      ctx.lineTo(treeWidth * 0.2, canvas.height - treeHeight)
      ctx.stroke()

      // Right tree
      ctx.beginPath()
      ctx.moveTo(canvas.width - treeWidth * 0.2, canvas.height)
      ctx.lineTo(canvas.width - treeWidth * 0.1, canvas.height - treeHeight * 0.3)
      ctx.lineTo(canvas.width - treeWidth * 0.3, canvas.height - treeHeight * 0.5)
      ctx.lineTo(canvas.width - treeWidth * 0.15, canvas.height - treeHeight * 0.7)
      ctx.lineTo(canvas.width - treeWidth * 0.35, canvas.height - treeHeight * 0.85)
      ctx.lineTo(canvas.width - treeWidth * 0.2, canvas.height - treeHeight)
      ctx.stroke()

      // Draw silhouette figures in background (far distance)
      const centerY = canvas.height * 0.7
      const figureSpacing = canvas.width / 4

      // Figure 1 - Running with ball
      const fig1X = canvas.width * 0.2
      ctx.beginPath()
      // Head
      ctx.arc(fig1X, centerY - 15, 4, 0, Math.PI * 2)
      ctx.fill()
      // Body
      ctx.beginPath()
      ctx.ellipse(fig1X, centerY, 3, 6, 0, 0, Math.PI * 2)
      ctx.fill()
      // Arms
      ctx.beginPath()
      ctx.moveTo(fig1X - 3, centerY - 3)
      ctx.lineTo(fig1X - 6, centerY - 1)
      ctx.moveTo(fig1X + 3, centerY - 3)
      ctx.lineTo(fig1X + 6, centerY - 1)
      ctx.stroke()
      // Legs
      ctx.beginPath()
      ctx.moveTo(fig1X - 2, centerY + 6)
      ctx.lineTo(fig1X - 3, centerY + 12)
      ctx.moveTo(fig1X + 2, centerY + 6)
      ctx.lineTo(fig1X + 3, centerY + 12)
      ctx.stroke()
      // Ball
      ctx.beginPath()
      ctx.arc(fig1X + 7, centerY - 1, 3, 0, Math.PI * 2)
      ctx.fill()

      // Figure 2 - Jumping
      const fig2X = canvas.width * 0.5
      ctx.beginPath()
      ctx.arc(fig2X, centerY - 18, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(fig2X, centerY - 3, 3, 6, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(fig2X - 3, centerY - 6)
      ctx.lineTo(fig2X - 5, centerY - 12)
      ctx.moveTo(fig2X + 3, centerY - 6)
      ctx.lineTo(fig2X + 5, centerY - 12)
      ctx.moveTo(fig2X - 2, centerY + 3)
      ctx.lineTo(fig2X - 3, centerY + 9)
      ctx.moveTo(fig2X + 2, centerY + 3)
      ctx.lineTo(fig2X + 3, centerY + 9)
      ctx.stroke()

      // Figure 3 - Kicking
      const fig3X = canvas.width * 0.8
      ctx.beginPath()
      ctx.arc(fig3X, centerY - 15, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(fig3X, centerY, 3, 6, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(fig3X - 3, centerY - 3)
      ctx.lineTo(fig3X - 5, centerY - 1)
      ctx.moveTo(fig3X + 3, centerY - 3)
      ctx.lineTo(fig3X + 5, centerY - 1)
      ctx.moveTo(fig3X - 2, centerY + 6)
      ctx.lineTo(fig3X - 3, centerY + 12)
      ctx.moveTo(fig3X + 2, centerY + 6)
      ctx.lineTo(fig3X + 7, centerY + 8)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(fig3X + 8, centerY + 8, 3, 0, Math.PI * 2)
      ctx.fill()

      // Update and draw speed lines
      speedLines.forEach((line) => {
        line.x += Math.cos(line.angle) * line.speed
        line.y += Math.sin(line.angle) * line.speed

        // Reset if off screen
        if (line.x < -50 || line.x > canvas.width + 50 || line.y < -50) {
          line.x = Math.random() * canvas.width
          line.y = Math.random() * canvas.height * 0.3
        }

        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        )
        ctx.strokeStyle = currentStrokeColor
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Update and draw leaves
      leaves.forEach((leaf) => {
        leaf.x += leaf.speedX
        leaf.y += leaf.speedY
        leaf.rotation += 0.02

        // Reset if off screen
        if (leaf.x < -20) {
          leaf.x = canvas.width + 20
          leaf.y = canvas.height * 0.6 + Math.random() * canvas.height * 0.4
        }
        if (leaf.y < -20) {
          leaf.y = canvas.height + 20
          leaf.x = Math.random() * canvas.width
        }

        ctx.save()
        ctx.translate(leaf.x, leaf.y)
        ctx.rotate(leaf.rotation)
        ctx.beginPath()
        ctx.ellipse(0, 0, leaf.size, leaf.size * 0.6, 0, 0, Math.PI * 2)
        ctx.fillStyle = currentLeafColor
        ctx.fill()
        ctx.restore()
      })

      time += 0.01
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full opacity-[0.12] dark:opacity-[0.06] pointer-events-none z-0"
        style={{ mixBlendMode: "multiply" }}
      />
      {/* Overlay for text readability */}
      <div className="fixed inset-0 bg-white/70 dark:bg-slate-950/75 pointer-events-none z-0" />
    </>
  )
}
