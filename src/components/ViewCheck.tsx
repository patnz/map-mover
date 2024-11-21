import { useState } from 'react'

type Props = {}

export default function ViewCheck({}: Props) {
  const [viewportSize, setViewportSize] = useState(
    `Width: ${window.innerWidth} | Height:${window.innerHeight}`
  )
  const width = window.innerWidth
  const height = window.innerHeight
  console.log(`Viewport width: ${width}, height: ${height}`)
  window.addEventListener('resize', () => {
    setViewportSize(
      `Width: ${window.innerWidth} | Height:${window.innerHeight}`
    )
    console.log(
      `Viewport resized to: ${window.innerWidth}x${window.innerHeight}`
    )
  })

  return (
    <>
      <div className="text-3xl border-8 border-pink-400 w-screen m-0 p-0">
        {viewportSize}
      </div>
      <img src="/central-otago.png" alt="Central Otago" />
    </>
  )
}
