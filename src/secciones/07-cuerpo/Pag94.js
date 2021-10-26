import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag94 = ({playBad, playGood}) => {

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
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/94.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                <div className="row" style={{height:"20vw"}}></div>
                <div className="col-7 adelante px-lg-5 px-4">
                    <div>
                        <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"4vw"}} src="static/Elementosporseparado/9 El cuerpo humano/cejas.png" alt="img"/>
                    </div>
                    <div className={good ? "px-md-4 text-end" : "px-md-4"}>
                        <img className="img-hover mx-3 mx-md-0" onClick={()=>{handleClickTrue()}} style={{height:"4vw"}} src="static/Elementosporseparado/9 El cuerpo humano/ojos.png" alt="img"/>
                    </div>
                    <div className="px-md-5">
                        <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"4vw"}} src="static/Elementosporseparado/9 El cuerpo humano/nariz.png" alt="img"/>
                    </div>
                    <div>
                        <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"4vw"}} src="static/Elementosporseparado/9 El cuerpo humano/boca.png" alt="img"/>
                    </div>

                </div>
                
                {/* 
                <div className="col-8 adelante">
                    <div className="row">
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"25vw"}} src="static/Elementosporseparado/8 Nocion de tamaño/oso.png" alt="img"/>
                        </div>
                        <div className="col-4">
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"9vw"}} src="static/Elementosporseparado/8 Nocion de tamaño/oso.png" alt="img"/>
                        </div>
                    </div>
                </div> */}

            </div>
            }
        </>
    )
}
