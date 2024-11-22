import { GeistSans } from 'geist/font/sans'

export default function Hero() {
  return (
    <div className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className={`${GeistSans.className} text-6xl font-bold mb-8`}>
          Open Source Software
        </h1>
        <p className={`${GeistSans.className} text-gray-400 text-xl leading-relaxed mb-4`}>
          Open source software is a major part of how we build our products. We believe in 
          creating and maintaining valuable, free, and easy-to-use software for the community.
        </p>
        <p className={`${GeistSans.className} text-gray-400 text-xl`}>
          Some of the projects we help contribute to are listed below.
        </p>
      </div>
    </div>
  )
} 