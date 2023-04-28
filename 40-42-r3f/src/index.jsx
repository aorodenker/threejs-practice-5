import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import App from './App';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';

const root = ReactDOM.createRoot(document.getElementById('root'));

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [3, 2, 6]
};

root.render(
    <Canvas
        flat
        gl={{
            toneMapping: ACESFilmicToneMapping,
            outputEncoding: sRGBEncoding
        }}
        camera={ cameraSettings }
    >
        <App />
    </Canvas>
);