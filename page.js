'use client'

import { useState, useEffect } from 'react'
import { Utensils, Wine, Heart } from 'lucide-react'

export default function DinnerInvitation() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showCelebration, setShowCelebration] = useState(false)
  const [animationStep, setAnimationStep] = useState(0)

  // Move the "No" button away from cursor when hovering
  const handleNoButtonHover = () => {
    // Get viewport dimensions
    const maxWidth = window.innerWidth - 150 // Account for button width
    const maxHeight = window.innerHeight - 60 // Account for button height
    
    // Generate random positions within viewport bounds
    const newX = Math.max(20, Math.random() * maxWidth)
    const newY = Math.max(20, Math.random() * maxHeight)
    
    setNoButtonPosition({ x: newX, y: newY })
  }

  const handleYesClick = () => {
    setShowCelebration(true)
  }

  // Animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main content */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-8 animate-bounce">
          Benimle bir akşam yemeğine çıkar mısın?
        </h1>
        
        {/* Custom Animation container */}
        <div className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-8 relative">
          <div className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center
            ${animationStep === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <Utensils className="w-full h-full text-[#8B4513]" />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center
            ${animationStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <Wine className="w-full h-full text-[#8B4513]" />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center
            ${animationStep === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <Heart className="w-full h-full text-[#8B4513]" />
          </div>
        </div>

        {/* Buttons container */}
        <div className="relative">
          <button
            onClick={handleYesClick}
            className="bg-[#8B4513] hover:bg-[#6B3410] text-white font-bold py-2 px-8 rounded-full mr-4 transform hover:scale-110 transition-transform"
          >
            Evet 😊
          </button>
          
          <button
            style={{
              position: 'fixed',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={handleNoButtonHover}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-full"
          >
            Hayır 😢
          </button>
        </div>
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">Harikasın! 🎉</h2>
            <p className="text-xl text-gray-700">Evete tıklaman sonrası bana haber verme kısmını kod olarak eklemediğim için, bana haber ver lütfen 😊</p>
            <button
              onClick={() => setShowCelebration(false)}
              className="mt-4 bg-[#8B4513] hover:bg-[#6B3410] text-white font-bold py-2 px-4 rounded"
            >
              Anlaştıkk
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

