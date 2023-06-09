import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { EffectComposer, Vignette, Glitch, Noise, Bloom, DepthOfField, SSR } from '@react-three/postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';
import { useControls } from 'leva';
import { useRef } from 'react';
import Drunk from './Drunk';

const App = () => {
    const drunkRef = useRef();

    const drunkProps = useControls('Drunk Effect', {
        frequency: { value: 2, min: 1, max: 20 },
        amplitude: { value: 0.1, min: 0, max: 1 }
    });

    return(
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[ 1, 2, 3 ]} intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />
            <color args={[ '#ffffff' ]} attach="background" />

            <EffectComposer multisampling={ 8 } >
                <Drunk ref={ drunkRef } { ...drunkProps } blendFunction={ BlendFunction.DARKEN } />
            </EffectComposer>

            <mesh castShadow position-x={ -2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh castShadow position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh receiveShadow position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" metalness={ 0 } roughness={ 0 } />
            </mesh>
        </>
    );
};

export default App;