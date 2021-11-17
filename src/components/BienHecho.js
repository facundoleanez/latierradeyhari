import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import useSound from 'use-sound';
import victorySound from '../sounds/victory.mp3';

export const BienHecho = ({setCompleted}) => {

    const { width } = useWindowDimensions();
    const widthBook = width *0.85 ;
    const heightBook = (width *0.56)*0.85;
    const [playVictory] = useSound(victorySound);
    const [video, setVideo] = useState('Muy bien') //'Muy bien' o 'Genial'

    useEffect(() => {
        playVictory()
        setVideo(Math.random() >0.5 ? 'Muy bien' : 'Genial')
    },[playVictory])


    return (
        <div className="img-hover position-absolute top-50 start-50 translate-middle" onClick={() => setCompleted(false)}>
            <video className="animate__animated animate__bounceIn" src={`static/Diapositivas animadas y GIFs/¡${video}!.mp4`} width={widthBook} height={heightBook} loop={true} autoPlay={true} />
        </div>
    )
}
