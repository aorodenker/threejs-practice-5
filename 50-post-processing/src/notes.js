//? Post Processing Docs
//* https://pmndrs.github.io/postprocessing/public/docs/
//* https://docs.pmnd.rs/react-postprocessing/introduction

//? EffectComposer
{/* <EffectComposer
    multisampling={ 8 }
    //...
>
    //...
</EffectComposer> */}

//? Vignette
{/* <Vignette
    offset={ 0.3 }
    darkness={ 0.9 }
    blendFunction={ BlendFunction.NORMAL }
/> */}

//? Glitch
{/* <Glitch
    delay={[ 0.5, 1 ]}
    duration={[ 0.1, 0.3 ]}
    strength={[ 0.2, 0.4 ]}
    mode={ GlitchMode.CONSTANT_WILD }
/> */}

//? Noise
{/* <Noise
    premultiply
    blendFunction={ BlendFunction.SOFT_LIGHT }
/> */}

//? Bloom
//* won't work with tone mapping because color must be value beyond 1
{/* <meshStandardMaterial color={[ 1.5, 1, 4 ]} toneMapped={ false } /> */}
//* to avoid relying on light source for glow, use meshBasicMaterial
{/* <meshBasicMaterial color={[ 1.5, 1, 4 ]} toneMapped={ false } /> */}
{/* <Bloom
    mipmapBlur
    intensity={ 0.5 }
/> */}

//? DepthOfField
//* some properties use normalized values (between 0-1) based on camera near and far
{/* <DepthOfField
    focusDistance={ 0.025 }
    focalLength={ 0.025 }
    bokehScale={ 6 }
/> */}