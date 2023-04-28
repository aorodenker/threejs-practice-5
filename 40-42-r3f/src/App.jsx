import { Canvas } from '@react-three/fiber';

const App = () => {
  return(
    <>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default App;