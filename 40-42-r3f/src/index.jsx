import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Canvas>
        <App />
    </Canvas>
);