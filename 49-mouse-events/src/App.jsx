import { useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, meshBounds } from '@react-three/drei';
import { useRef } from 'react';

//? meshBounds
//* better for performance on complex geometry click events
//* only useable on single meshes (wont work on burger)
// raycast={ meshBounds }

//? useBVH
//* like meshBounds, but more precise

const App = () => {
    const cube = useRef();
    const burger = useGLTF('./hamburger.glb');

    useFrame((state, delta) => {
        cube.current.rotation.y += delta * 0.2;
    });

    const eventHandler = (e) => {
        cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
    };

    const stopProp = (e) => {
        e.stopPropagation();
    };

    const burgerClick = (e) => {
        e.stopPropagation()
        console.log('burger')
    };

    return(
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[ 1, 2, 3 ]} intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />

            <mesh position-x={ -2 } onClick={ stopProp } >
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh
                ref={ cube }
                raycast={ meshBounds }
                position-x={ 2 }
                scale={ 1.5 }
                onClick={ eventHandler }
                onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
                onPointerLeave={ () => { document.body.style.cursor = 'default' } }
            >
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
            <primitive
                object={ burger.scene }
                scale={ 0.25 }
                position-y={ 0.5 }
                onClick={ burgerClick }
            />
        </>
    );
};

export default App;