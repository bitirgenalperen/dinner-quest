'use client'

import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import dinnerAnimation from './dinner-animation.json'

export default function DinnerInvitation() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showCelebration, setShowCelebration] = useState(false)

  // Move the "No" button away from cursor when hovering
  const handleNoButtonHover = () => {
    const newX = Math.random() * (window.innerWidth - 100) // Subtract button width
    const newY = Math.random() * (window.innerHeight - 40) // Subtract button height
    setNoButtonPosition({ x: newX, y: newY })
  }

  const handleYesClick = () => {
    setShowCelebration(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main content */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8 animate-bounce">
          Would you go out for a dinner with me?
        </h1>
        
        {/* Animation container */}
        <div className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-8">
          <Lottie
            animationData={dinnerAnimation}
            loop={true}
            className="w-full h-full"
          />
        </div>

        {/* Buttons container */}
        <div className="relative">
          <button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-full mr-4 transform hover:scale-110 transition-transform"
          >
            Yes 😊
          </button>
          
          <button
            style={{
              position: 'absolute',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={handleNoButtonHover}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-full"
          >
            No 😢
          </button>
        </div>
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Yay! 🎉</h2>
            <p className="text-xl text-gray-700">I'll text you the details! 😊</p>
            <button
              onClick={() => setShowCelebration(false)}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

