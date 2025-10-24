import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
export default function Hero3D() {
    return (_jsx("div", { className: "h-[420px] w-full", children: _jsxs(Canvas, { camera: { position: [0, 0, 6] }, children: [_jsx("ambientLight", { intensity: 0.5 }), _jsx("pointLight", { position: [10, 10, 10] }), _jsx(Stars, { radius: 100, depth: 50, count: 5000, factor: 4, saturation: 0, fade: true, speed: 1 }), _jsx(Float, { speed: 1.5, rotationIntensity: 1.2, floatIntensity: 1.2, children: _jsx(Sphere, { args: [1.6, 64, 64], children: _jsx(MeshDistortMaterial, { color: "#9b87f5", attach: "material", distort: 0.4, speed: 2, roughness: 0.2, metalness: 0.8 }) }) }), _jsx(OrbitControls, { enablePan: false, enableZoom: false, autoRotate: true, autoRotateSpeed: 0.8 })] }) }));
}
