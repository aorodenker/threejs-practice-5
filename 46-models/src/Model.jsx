import { useGLTF, Clone } from '@react-three/drei';

const Model = () => {

  const model = useGLTF('./hamburger-draco.glb');

  return(
    <>
      <Clone object={ model.scene } scale={ 0.35 } position-x={ -4 } />
      <Clone object={ model.scene } scale={ 0.35 } position-x={ 0 } />
      <Clone object={ model.scene } scale={ 0.35 } position-x={ 4 } />
    </>
  );
};

//* enable preloading, must be outside component
useGLTF.preload('./hamburger-draco.glb');

export default Model;