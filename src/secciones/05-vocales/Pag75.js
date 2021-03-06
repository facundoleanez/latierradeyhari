import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag75 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false])
    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);


    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
        playBad();
    }

    const handleClickTrue = (i) => {
      setIsSelected((prevState) => prevState.map((item,index) => {
          setGood(true);
          playGood();
          if (index === i) {
              return true
          }
          return item
      }))
    };

    useEffect(() => {
        if (isSelected.every(elem => elem )){
            setCompleted(true)
        }
    }, [isSelected])

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
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/74.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                <div className="ancho-3"></div>
                <div className="col-8" style={{zIndex:1}}>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/arbol.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/auto.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/isla.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/impresora.png" alt="img"/>
                    <img className={`img-hover ${isSelected[0]? "d-none" : ""}`} onClick={()=>{handleClickTrue(0)}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/estrella.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/ojos.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/oveja.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/uvas.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/abeja.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/anan??.png" alt="img"/>
                    <img className={`img-hover ${isSelected[1]? "d-none" : ""}`} onClick={()=>{handleClickTrue(1)}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/espejo.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/tractor.png" alt="img"/>
                    <img className={`img-hover ${isSelected[2]? "d-none" : ""}`} onClick={()=>{handleClickTrue(2)}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/empanada.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/5 N??meros del 0 al 5/1-nene.png" alt="img"/>
                    <img className={`img-hover ${isSelected[3]? "d-none" : ""}`} onClick={()=>{handleClickTrue(3)}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/enchufe.png" alt="img"/>
                    <div className="row bg-amarillo border border-dark justify-content-around m-2 p-2 alto-12 overflow-hidden">
                        <div className="col-2 bg-white redondeado py-3 d-flex flex-column justify-content-center align-items-center">{ isSelected[0] && <> <img className="animate__animated animate__flip" style={{height:"5vw"}} src="static/Elementosporseparado/7 Las vocales/estrella.png" alt="img" /> <div className="fuente-1 letra-chica">Estrella</div> </>}</div>
                        <div className="col-2 bg-white redondeado py-3 d-flex flex-column justify-content-center align-items-center">{ isSelected[1] && <> <img className="animate__animated animate__flip" style={{height:"5vw"}} src="static/Elementosporseparado/7 Las vocales/espejo.png" alt="img" /> <div className="fuente-1 letra-chica">Espejo</div> </>}</div>
                        <div className="col-2 bg-white redondeado py-3 d-flex flex-column justify-content-center align-items-center">{ isSelected[2] && <> <img className="animate__animated animate__flip" style={{height:"5vw"}} src="static/Elementosporseparado/7 Las vocales/empanada.png" alt="img" /> <div className="fuente-1 letra-chica">Empanada</div> </>}</div>
                        <div className="col-2 bg-white redondeado py-3 d-flex flex-column justify-content-center align-items-center">{ isSelected[3] && <> <img className="animate__animated animate__flip" style={{height:"5vw"}} src="static/Elementosporseparado/7 Las vocales/enchufe.png" alt="img" /> <div className="fuente-1 letra-chica">Enchufe</div> </>}</div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
