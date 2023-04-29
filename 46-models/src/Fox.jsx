import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';
import { useControls } from 'leva';

const Fox = () => {
  const fox = useGLTF('./Fox/glTF/Fox.gltf');
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names }
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action
      .reset()
      .fadeIn(0.5)
      .play();

    return () => {
      action.fadeOut(0.5);
    };

    // setTimeout(() => {
    //   animations.actions.Walk.play();
    //   animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
    // }, 2000);
    // setTimeout(() => {
    //   animations.actions.Survey.play();
    //   animations.actions.Survey.crossFadeFrom(animations.actions.Walk, 1);
    // }, 4000);
  }, [ animationName ]);

  return (
    <primitive
      object={ fox.scene }
      scale={ 0.02 }
      position={[ -2.5, 0, 2.5 ]}
      rotation-y={ 0.3 }
    />
  );
};

useGLTF.preload('./Fox/glTF/Fox.gltf');

export default Fox;