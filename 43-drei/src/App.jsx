import { MeshReflectorMaterial, Float, Text, Html, OrbitControls, TransformControls, PivotControls } from '@react-three/drei';
import { useRef } from 'react';

const App = () => {

    const cube = useRef();
    const sphere = useRef();

    return(
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[ 1, 2, 3 ]} intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />

            <PivotControls
                anchor={[ 0, 0, 0 ]}
                depthTest={ false }
                lineWidth={ 4 }
                axisColors={[ '#9381ff', '#ff4d6d', '#7ae582' ]}
                scale={ 100 }
                fixed={ true }
            >
                <mesh ref={ sphere } position-x={ -2 } >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                    <Html
                        position={[ 1, 1, 0 ]}
                        wrapperClass="label"
                        center
                        distanceFactor={ 8 }
                        occlude={[ sphere, cube ]}
                    >
                        Sphere boi
                    </Html>
                </mesh>
            </PivotControls>

            <mesh ref={ cube } scale={ 1.5 } position-x={ 2 } >
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
            <TransformControls object={ cube } />

            <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 } >
                <planeGeometry />
                <MeshReflectorMaterial
                    resolution={ 512 }
                    blur={[ 1000, 1000 ]}
                    mixBlur={ 1 }
                    mirror={ 1 }
                    color="green"
                />
            </mesh>

            <Float
                speed={ 5 }
                floatIntensity={ 2 }
            >
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
                    color="salmon"
                    position-y={ 2 }
                    maxWidth={ 2 }
                    textAlign="center"
                >
                    Test Text
                </Text>
            </Float>

        </>
    );
};

export default App;