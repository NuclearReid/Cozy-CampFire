import { Text3D } from "@react-three/drei"


export default function CozyCampText()
{

    return(
        <>
             <Text3D 
                font='./text/FingerPaint-Regular.ttf'
                rotation-y={ - Math.PI * 0.25}
                // position-y={1.4}
                position={[-2.19, 10.6, 2.2]}
            >
                Cozy 
                <meshToonMaterial color={'#E13C42'}/>
            </Text3D>

            <Text3D 
                font='./text/FingerPaint-Regular.ttf'
                rotation-y={ - Math.PI * 0.25}
                textAlign={'center'}
                position={[-2.19, 9.2, 2.2]}
            >
                Camp! 
                <meshToonMaterial color={'#E13C42'}/>
            </Text3D>
        
        </>
    )
}