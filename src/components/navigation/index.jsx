'use client'

import { BtnList } from '@/app/data'
import { useState, useEffect } from 'react'
import NavButton from './NavButton'

const Navigation = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const angleIncrement = 360 / BtnList.length

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='relative flex items-center justify-center animate-spin-slow'
        style={{
          width: `${Math.min(windowSize.width, windowSize.height)}px`,
          height: `${Math.min(windowSize.width, windowSize.height)}px`,
        }}>
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180
          const radius =
            (Math.min(windowSize.width, windowSize.height) / 2) * 0.8
          const x = radius * Math.cos(angleRad)
          const y = radius * Math.sin(angleRad)
          return (
            <NavButton
              key={btn.label}
              x={x}
              y={y}
              {...btn}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Navigation
