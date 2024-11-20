import React, { useState } from 'react'

type Props = {}

export default function ViewCheck({}: Props) {
  const [viewportSize, setViewportSize] = useState('')
  const width = window.innerWidth
  const height = window.innerHeight
  console.log(`Viewport width: ${width}, height: ${height}`)
  window.addEventListener('resize', () => {
    setViewportSize(
      `Viewport resized to: ${window.innerWidth}x${window.innerHeight}`
    )
    console.log(
      `Viewport resized to: ${window.innerWidth}x${window.innerHeight}`
    )
  })

  return <div>ViewCheck</div>
}
