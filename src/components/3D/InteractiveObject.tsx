import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface InteractiveObjectProps {
  position?: [number, number, number]
  color?: string
  onClick?: () => void
  onHover?: (hovered: boolean) => void
  animated?: boolean
  children?: React.ReactNode
}

export default function InteractiveObject({
  position = [0, 0, 0],
  color = '#ff6b6b',
  onClick,
  onHover,
  animated = false,
  children,
}: InteractiveObjectProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (animated && meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  const handlePointerOver = () => {
    setHovered(true)
    onHover?.(true)
  }

  const handlePointerOut = () => {
    setHovered(false)
    onHover?.(false)
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      scale={hovered ? 1.1 : 1}
    >
      {children || <boxGeometry args={[1, 1, 1]} />}
      <meshStandardMaterial color={hovered ? '#ff8787' : color} />
    </mesh>
  )
}

