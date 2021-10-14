import React, { useEffect } from 'react'
import useWindowDimensions, {responsiveWidth, responsiveHeight} from '../hooks/useWindowDimensions';
import useSound from 'use-sound';
import victorySound from '../sounds/victory.mp3';

export const BienHecho = ({setCompleted}) => {

    const { width} = useWindowDimensions();
    const [playVictory] = useSound(victorySound);
    useEffect(() => {
        playVictory()
    },[playVictory])
    return (
        <div className="img-hover" onClick={() => setCompleted(false)}>
            <video className="animate__animated animate__bounceIn" src="static\Diapositivas animadas y GIFs\¡Muy bien!.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} />
           
        </div>
    )
}
