import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Html } from '@react-three/drei'
import { Group, Mesh } from 'three'
import * as THREE from 'three'

interface StrandSceneProps {
  lessonTitle: string
  lessonDescription: string
  tasks?: Array<{
    id: string
    title: string
    description: string
    code?: string
  }>
}

export default function StrandScene({ lessonTitle, lessonDescription, tasks = [] }: StrandSceneProps) {
  const groupRef = useRef<Group>(null)
  const windowRefs = useRef<(Group | null)[]>([])
  const scroll = useScroll()
  
  // Make sure scroll is available
  if (!scroll) return null
  
  // Default tasks if none provided
  const defaultTasks = useMemo(() => {
    if (tasks.length > 0) return tasks
    
    return [
      {
        id: 'task-1',
        title: 'Variables & Data Types',
        description: 'Learn how to declare variables and understand different data types.',
        code: 'let name = "Codeverse";\nconst age = 25;',
      },
      {
        id: 'task-2',
        title: 'Functions',
        description: 'Create and use functions to organize your code.',
        code: 'function greet(name) {\n  return `Hello, ${name}!`;\n}',
      },
      {
        id: 'task-3',
        title: 'Control Flow',
        description: 'Use conditionals and loops to control program flow.',
        code: 'if (condition) {\n  // do something\n}',
      },
      {
        id: 'task-4',
        title: 'Practice Exercise',
        description: 'Apply what you\'ve learned in a practical exercise.',
        code: '// Your code here',
      },
    ]
  }, [tasks])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    
    // Smooth rotation of the central group on its own z-axis (like a clock)
    // Rotates continuously on z-axis (viewed from top)
    groupRef.current.rotation.z = clock.getElapsedTime() * 0.2
    
    // Scroll-based positioning of windows
    const scrollProgress = scroll.offset
    
    // Position windows spiraling down diagonally around the strand
    defaultTasks.forEach((task, i) => {
      const windowGroup = windowRefs.current[i]
      if (windowGroup) {
        // Spiral angle - windows spiral down as we scroll
        const baseAngle = (i / defaultTasks.length) * Math.PI * 2
        const scrollAngle = scrollProgress * Math.PI * 2
        const angle = baseAngle + scrollAngle
        const radius = 3.5
        
        // Base vertical position
        const baseY = -i * 4
        // Scroll-driven vertical movement
        const scrollOffset = scrollProgress * -20
        
        // Position windows in a spiral pattern going down diagonally
        windowGroup.position.x = Math.cos(angle) * radius
        windowGroup.position.y = baseY + scrollOffset
        windowGroup.position.z = Math.sin(angle) * radius
        
        // Rotate windows to face outward from the strand
        const lookAtX = Math.cos(angle) * 10
        const lookAtZ = Math.sin(angle) * 10
        windowGroup.lookAt(lookAtX, windowGroup.position.y, lookAtZ)
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Central Strand */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 50, 8]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Glowing particles along strand */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[0, -i * 2.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.8} />
        </mesh>
      ))}

      {/* Windows with Content - positioned along y-axis */}
      {defaultTasks.map((task, index) => {
        return (
          <group 
            key={task.id} 
            ref={(el) => { windowRefs.current[index] = el }}
          >
            {/* Window Frame */}
            <mesh>
              <boxGeometry args={[3, 4, 0.15]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
            
            {/* Window Glass */}
            <mesh position={[0, 0, 0.08]}>
              <boxGeometry args={[2.8, 3.8, 0.05]} />
              <meshStandardMaterial 
                color="#0f172a" 
                transparent 
                opacity={0.8}
                emissive="#1e40af"
                emissiveIntensity={0.3}
              />
            </mesh>
            
            {/* Window Border Glow */}
            <mesh position={[0, 0, 0.07]}>
              <ringGeometry args={[1.3, 1.5, 32]} />
              <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
            </mesh>
            
            {/* HTML Content Overlay - No transform to prevent rotation */}
            <Html
              position={[0, 0, 0.1]}
              transform={false}
              occlude
              center
              style={{
                width: '280px',
                height: '380px',
                pointerEvents: 'none',
              }}
              zIndexRange={[100, 0]}
            >
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/50 text-white">
                <h3 className="text-lg font-bold font-heading text-indigo-400 mb-2">{task.title}</h3>
                <p className="text-sm text-gray-300 font-body mb-4">{task.description}</p>
                {task.code && (
                  <div className="bg-gray-800 rounded p-3 border border-gray-700">
                    <pre className="text-xs text-green-400 font-code whitespace-pre-wrap">
                      {task.code}
                    </pre>
                  </div>
                )}
              </div>
            </Html>
            
            {/* Glow Effect */}
            <pointLight position={[0, 0, 0.5]} intensity={0.8} color="#3b82f6" distance={6} />
          </group>
        )
      })}

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
    </group>
  )
}

