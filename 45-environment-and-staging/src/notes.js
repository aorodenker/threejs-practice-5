//? SoftShadows
{/* <SoftShadows
    frustum={3.75}
    size={0.005}
    near={9.5}
    samples={17}
    rings={11}
/> */}

//? BakeShadows
{/* <BakeShadows /> */}

//? AccumulativeShadows
//* only works on floor (plane), not great for animated objects
{/* <AccumulativeShadows
    position={[ 0, -0.99, 0 ]}
    scale={ 10 }
    color="#316d39"
    opacity={ 0.8 }
    frames={ Infinity }
    temporal
    blend={ 100 }
    >
    <RandomizedLight
        amount={ 8 }
        radius={ 1 }
        ambient={ 0.5 }
        intensity={ 1 }
        position={[ 1, 2, 3 ]}
        bias={ 0.001 }
/>
</AccumulativeShadows> */}

//? ContactShadows
//* only works on floor (plane)
//* can bake shadows by setting frames to 1
//* bad performance, good for small projects
{/* <ContactShadows
    position={[ 0, -0.99, 0 ]}
    scale={ 10 }
    resolution={ 512 }
    far={ 5 }
    color={ color }
    opacity={ opacity }
    blur={ blur }
    frames={ 1 }
/> */}

//? Sky
// <Sky sunPosition={ sunPosition } />
//* better to set position with Spherical coordinates -> Vec3 -> setFromSpherical
// const { sunPosition } = useControls('sky', {
//     sunPosition: { value: [ 1, 2, 3 ] }
// });

// const files = [
//     './environmentMaps/2/px.jpg',
//     './environmentMaps/2/nx.jpg',
//     './environmentMaps/2/py.jpg',
//     './environmentMaps/2/ny.jpg',
//     './environmentMaps/2/pz.jpg',
//     './environmentMaps/2/nz.jpg'
// ];

//* https://polyhaven.com/
//* use smallest possible resolution, and download as hdr
// const files = './environmentMaps/the_sky_is_on_fire_2k.hdr';

//? Environment
{/* <Environment
    background
    files={ files }
    drei has preset backgrounds
    preset="sunset"
    resolution={ 32 }
    ground={{
        height: envMapHeight,
        radius: envMapRadius,
        scale: envMapScale
    }}
>
    <Lightformer position-z={ -5 } scale={ 10 } color="red" intensity={ 10 } form="ring" />

    <color args={[ '#000000' ]} attach="background" />

    <mesh position-z={ -5 } scale={ 10 } >
        <planeGeometry />
        <meshBasicMaterial color={[ 10, 0, 0 ]} />
    </mesh>
</ Environment> */}

//? useHelper
//* useHelper(ref, helper, size)
// useHelper(directionalLight, THREE.DirectionalLightHelper, 1);