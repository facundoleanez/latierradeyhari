import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag91 = ({playBad, playGood}) => {

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
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/91.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien"/>}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien"/>}
                <div className="row alto-10"></div>
                <div className="col-1"></div>
                <div className="col-8 adelante">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <img className="img-hover" onClick={()=>{handleClickTrue()}} style={{height:"18vw"}} src="static/Elementosporseparado/8 Nocion de tamaño/pelota.png" alt="img"/>
                        </div>
                        <div className="col-4">
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"14vw"}} src="static/Elementosporseparado/8 Nocion de tamaño/pelota.png" alt="img"/>
                        </div>
                        <div className="col-4">
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"9vw"}} src="static/Elementosporseparado/8 Nocion de tamaño/pelota.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
