// src/components/HeroSection.js

import * as React from "react"
import { Link } from "gatsby"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
        Master AWS AI the Smart Way
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10">
        Interactive flashcards and quizzes to help you prep efficiently. No fluff—just focused learning.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <Link to="/flashcards" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg transition">
          View Flashcards
        </Link>
        <Link to="/quiz" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl shadow-lg transition">
          Take Quiz
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
