import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas} from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    <Canvas
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-10.9, 15.2, 8.9],
        }}
    >
        <Experience />
    </Canvas>
)
