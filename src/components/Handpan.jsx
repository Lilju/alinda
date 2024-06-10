import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export function Handpan() {
    const model = useLoader(GLTFLoader, "../assets/Handpan.glb");

    return <primitive object={model.scene} />
}
