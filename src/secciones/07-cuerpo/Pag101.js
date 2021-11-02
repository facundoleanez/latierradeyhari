import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag101 = ({playBad, playGood}) => {

    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);

    const handleClickTrue = () => {
        setCompleted(true);
        setGood(true);
        setWrong(false);
        playGood()
    }
    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
        playBad()
    }
    useEffect(() => {
        if (wrong) {
            const timeOut = setTimeout(()=>setWrong(false), 1000)
            return () => {
                clearTimeout(timeOut)
            }
        }
    }, [wrong])

    return (
        <>
            { completed ? (<BienHecho setCompleted={setCompleted}/>) :
            <div className="row p-3 p-lg-5">
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/101.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                <div className="row" style={{height:"10vw"}}></div>
                <div className="col-7 row adelante">
                    <div className="col-7 text-center py-4">
                            <img className={good ? "d-none" : "img-hover"} onClick={()=>{handleClickTrue()}} style={{height:"4vw"}} src="static/Elementosporseparado/9 El cuerpo humano/manos.png" alt="img"/>
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"12vw"}} src="static/Elementosporseparado/9 El cuerpo humano/piernas.png" alt="img"/>
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"4vw"}} src="static/Elementosporseparado/9 El cuerpo humano/pies.png" alt="img"/>
                    </div>
                    <div className="col-5 border text-center border-dark bg-amarillo py-4">
                            {
                                good ?
                                <img className="animate__animated animate__bounceIn" style={{height:"20vw"}} src="static/Elementosporseparado/9 El cuerpo humano/cabeza-torso-brazos-y-manos.png" alt="img"/> :
                                <img style={{height:"20vw"}} src="static/Elementosporseparado/9 El cuerpo humano/torso-cabeza-y-brazos.png" alt="img"/>
                            }

                    </div>
                </div>
            </div>
            }
        </>
    )
}
