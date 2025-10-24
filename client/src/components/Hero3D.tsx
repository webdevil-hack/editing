import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

export default function Hero3D() {
  return (
    <div className="h-[420px] w-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.2}>
          <Sphere args={[1.6, 64, 64]}>
            <MeshDistortMaterial color="#9b87f5" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
          </Sphere>
        </Float>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
