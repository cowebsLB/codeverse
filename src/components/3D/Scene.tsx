import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ReactNode } from 'react'

interface SceneProps {
  children: ReactNode
  cameraPosition?: [number, number, number]
}

export default function Scene({ children, cameraPosition = [0, 0, 5] }: SceneProps) {
  return (
    <Canvas className="w-full h-full" camera={{ position: cameraPosition }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      <OrbitControls enableDamping dampingFactor={0.05} />
      {children}
    </Canvas>
  )
}

