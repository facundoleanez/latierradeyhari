import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag86 = ({playBad, playGood}) => {

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
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/86.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                <div className="row" style={{height:"10vw"}}></div>
                <div className="col-5"></div>
                <div className="col-7 adelante">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"18vw"}} src="static/Elementosporseparado/7 Las vocales/patito.png" alt="img"/>
                        </div>
                        <div className="col-4">
                            <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"14vw"}} src="static/Elementosporseparado/7 Las vocales/patito.png" alt="img"/>
                        </div>
                        <div className="col-4">

                            {good && <div style={{height:"20vw"}}></div>}
                            <img className="img-hover" onClick={()=>{handleClickTrue()}} style={{height:"9vw"}} src="static/Elementosporseparado/7 Las vocales/patito.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
