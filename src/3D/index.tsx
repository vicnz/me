import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Mesh } from 'three';

function Default() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[5, 5, 5]} color={'yellow'} />
            <Cube />
        </Canvas>
    )
}

function Cube() {
    const meshRef = useRef<Mesh>(null)
    useFrame(() => {
        if (!meshRef.current) {
            return;
        }
        meshRef.current.rotation.x += 0.01
        meshRef.current.rotation.y += 0.01
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}
export default Default