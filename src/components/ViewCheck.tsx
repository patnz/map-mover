import { useEffect, useState } from 'react'

export default function ViewCheck() {
  const [viewportSize, setViewportSize] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    updateViewportSize() // Initialize dimensions
    window.addEventListener('resize', updateViewportSize)

    return () => {
      window.removeEventListener('resize', updateViewportSize)
    }
  }, [])

  return (
    <div
      className={`relative w-[${viewportSize.width}] h-[${viewportSize.height}]`}
    >
      <p
        className={`relative z-20 w-[${viewportSize.width}] h-[${viewportSize.height}]`}
      >
        Width: {viewportSize.width}, Height: {viewportSize.height}
      </p>
      <img
        src="/central-otago.png"
        className="absolute top-0 left-0 z-10 object-none"
        alt="Central Otago"
      />
    </div>
  )
}
