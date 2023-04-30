import { OrbitControls, Text3D, Center, useMatcapTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import { useState, useRef } from 'react';

const App = () => {
    const [ torusGeometry, setTorusGeometry ] = useState();
    const [ torusMaterial, setTorusMaterial ] = useState();
    const donuts = useRef([]);

    const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);

    useFrame((state, delta) => {
        for (const donut of donuts.current) {
            donut.rotation.y += delta * 0.2;
        };
    });

    return(
    <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <torusGeometry ref={ setTorusGeometry } args={[ 1, 0.6, 16, 32 ]} />
        <meshMatcapMaterial ref={ setTorusMaterial } matcap={ matcapTexture } />

        <Center>
            <Text3D
                material={ torusMaterial }
                font="./fonts/helvetiker_regular.typeface.json"
                size={ 0.75 }
                height={ 0.2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                HELLO R3F
            </Text3D>
        </Center>

        {[...Array(100)].map((item, idx) =>
            <mesh
                ref={ (element) => donuts.current[idx] = element }
                key={ idx }
                geometry={ torusGeometry }
                material={ torusMaterial }
                scale={ 0.2 + Math.random() * 0.2 }
                rotation={[
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ]}
                position={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ]}
            />
        )}
    </>
    );
};

export default App;