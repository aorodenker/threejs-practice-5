import { useFrame } from '@react-three/fiber';
import {
    OrbitControls,
    useHelper,
    BakeShadows,
    SoftShadows,
    AccumulativeShadows,
    RandomizedLight,
    ContactShadows,
    Sky,
    Environment,
    Lightformer,
    Stage
    } from '@react-three/drei';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import { useControls } from 'leva';


const App = () => {
    const directionalLight = useRef();
    const cube = useRef();

    const { color, opacity, blur } = useControls('contact shadows', {
        color: '#4b2709',
        opacity: { value: 0.7, min: 0, max: 1 },
        blur: { value: 2.8, min: 0, max: 10 }
    });

    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map', {
        envMapIntensity: { value: 7, min: 0, max: 12 },
        envMapHeight: { value: 7, min: 0, max: 100 },
        envMapRadius: { value: 28, min: 10, max: 1000 },
        envMapScale: { value: 100, min: 10, max: 1000 }
    });

    return(
            <>
                <Perf position="top-left" />
                <OrbitControls makeDefault />
                <color args={[ 'ivory' ]} attach="background" />

                <ContactShadows
                    position={[ 0, 0, 0 ]}
                    scale={ 10 }
                    resolution={ 512 }
                    far={ 5 }
                    color={ color }
                    opacity={ opacity }
                    blur={ blur }
                    frames={ 1 }
                />
                <Environment
                    preset="sunset"
                    ground={{
                        height: envMapHeight,
                        radius: envMapRadius,
                        scale: envMapScale
                    }}
                >
                </ Environment>

                <mesh castShadow position-x={ -2 } position-y={ 1 } >
                    <sphereGeometry />
                    <meshStandardMaterial envMapIntensity={ envMapIntensity } color="orange" />
                </mesh>

                <mesh castShadow ref={ cube } position-x={ 2 } scale={ 1.5 } position-y={ 1 } >
                    <boxGeometry />
                    <meshStandardMaterial envMapIntensity={ envMapIntensity } color="mediumpurple" />
                </mesh>

            </>
    );
};

export default App;