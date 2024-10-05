'use client'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { Suspense } from 'react'

const RenderModel = ({ className, children }) => {
  return (
    <Canvas className={clsx('w-full z-10 h-screen relative', className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset='dawn' />
    </Canvas>
  )
}

export default RenderModel
