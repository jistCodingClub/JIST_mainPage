import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Yeh component ek single line ko represent karta hai
const FallingLine = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const speed = useMemo(() => Math.random() * 0.1 + 0.02, []); // Random speed
    const initialY = useMemo(() => Math.random() * 20 - 10, []); // Random Y position to start with

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.y -= speed;

            // Jab line neeche chali jaye, toh use wapas upar le aao
            if (meshRef.current.position.y < -15) {
                meshRef.current.position.y = 15;
            }
        }
    });

    return (
        <mesh ref={meshRef} position={[
            (Math.random() - 0.5) * 20, // Random X position
            initialY,
            0
        ]}>
            <boxGeometry args={[0.01, 0.5, 0.01]} />
            <meshBasicMaterial color="cyan" />
        </mesh>
    );
};

// Yeh main component hai jo sab lines ko render karega
const LightningBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ background: 'transparent' }} // Transparent background
            >
                <ambientLight intensity={0.5} />
                {[...Array(150)].map((_, i) => ( // 150 lines create kiye hain
                    <FallingLine key={i} />
                ))}
            </Canvas>
        </div>
    );
};

export default LightningBackground;