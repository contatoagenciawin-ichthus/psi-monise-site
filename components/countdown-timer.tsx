"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return null
  }

  const segments = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ]

  return (
    <div className="w-full max-w-4xl">
      <p className="mb-6 font-sans text-sm uppercase tracking-widest text-[#C5A065]">Evento em</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {segments.map((segment, index) => (
          <motion.div
            key={segment.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl bg-[#F9F8F3] p-6 shadow-lg backdrop-blur-sm"
          >
            <motion.div
              key={segment.value}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.3 }}
              className="mb-2 font-serif text-4xl font-bold text-[#74113a] md:text-5xl"
            >
              {String(segment.value).padStart(2, "0")}
            </motion.div>
            <div className="font-sans text-xs uppercase tracking-wider text-[#C5A065] md:text-sm">{segment.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
