import React from 'react'
import useWindowDimensions, {responsiveWidth, responsiveHeight} from '../hooks/useWindowDimensions';

export const BienHecho = () => {
    const {height, width} = useWindowDimensions();
    return (
        <div>
            <video className="animate__animated animate__bounceIn" src="static\Diapositivas animadas y GIFs\¡Muy bien!.mp4" width={responsiveWidth(width)} height={responsiveHeight(width)} loop={true} autoPlay={true} />
            {console.log(responsiveHeight, responsiveHeight)}
        </div>
    )
}
