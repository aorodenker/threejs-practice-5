//* Matcaps:
//* https://github.com/emmelleppi/matcaps
//* https://github.com/nidorx/matcaps/blob/master/PAGE-17.md#7b5254_e9dcc7_b19986_c8ac91

//* spreading Array(num) inside an array creates an array of undefined
//* tricks js into thinking it isn't empty, allowing us to map over it
// const tempArray = [...Array(100)];

//? Optimize geometry and material
//? Option 1
//* ref={ setStateFunc } tricks react into saving that element to state
// const [ torusGeometry, setTorusGeometry ] = useState();
{/* <torusGeometry ref={ setTorusGeometry } args={[ 1, 0.6, 16, 32 ]} /> */}

//? Option 2
//* mix native threejs with react
// const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
// const torusMaterial = new THREE.MeshMatcapMaterial();
// useEffect(() => {
//     matcapTexture.encoding = THREE.sRGBEncoding;
//     matcapTexture.needsUpdate = true;

//     torusMaterial.matcap = matcapTexture;
//     torusMaterial.needsUpdate = true;
// }, []);

//? Animating each mesh in a map function
//? Option 1
//* put mesh map in a 'group' to access each mesh as a child
// const donutGroup = useRef();
{/* <group>
    //...
</group> */}
// useFrame((state, delta) => {
//     for (const donut of donutGroup.current.children) {
//         donut.rotation.y += delta * 0.2;
//     };
// });

//? Option 2
//* give each mesh a ref
// const donuts = useRef([]);
// ref={ (element) => donuts.current[idx] = element }
// useFrame((state, delta) => {
//     for (const donut of donuts.current) {
//         donut.rotation.y += delta * 0.2;
//     };
// });