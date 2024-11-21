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
      style={{
        width: `${viewportSize.width}px`,
        height: `${viewportSize.height}px`,
        position: 'relative',
      }}
    >
      <p
        style={{
          width: `${viewportSize.width}px`,
          height: `${viewportSize.height}px`,
          border: '4px solid yellow',
          position: 'relative',
          zIndex: 20,
        }}
      >
        Width: {viewportSize.width}, Height: {viewportSize.height}
      </p>
      <img
        src="/central-otago.png"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
        }}
        alt="Central Otago"
      />
    </div>
  )
}
