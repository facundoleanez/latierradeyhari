import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag80 = ({playBad, playGood}) => {

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
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/80.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                <div className="col-8" style={{zIndex:1}}>
                <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/1-celeste.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/arbol.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/auto.png" alt="img"/>
                    <img className={`img-hover ${isSelected[0]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleClickTrue(0)}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/olla.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/escalera.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/estrella.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/isla.png" alt="img"/>
                    <img className={`img-hover ${isSelected[1]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleClickTrue(1)}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/ojos.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/impresora.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/uvas.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/abeja.png" alt="img"/>
                    <img className={`img-hover ${isSelected[2]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleClickTrue(2)}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/oso.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/ananá.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/bicicleta.png" alt="img"/>
                    <img className={`img-hover ${isSelected[3]? "animate__animated animate__flip selected" : ""}`} onClick={()=>{handleClickTrue(3)}} style={{height:"7vw"}} src="static/Elementosporseparado/7 Las vocales/oro.png" alt="img"/>
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} style={{height:"10vw"}} src="static/Elementosporseparado/7 Las vocales/tractor.png" alt="img"/>
                    <div className="row bg-amarillo border border-dark justify-content-around m-2 p-2" style={{height:"10vw"}}>
                        <div className="col-2 bg-white rounded-circle py-3 text-center">{ isSelected[0] && <img style={{height:"7vw"}} src="static/Elementosporseparado/7 Las vocales/olla.png" alt="img" /> }</div>
                        <div className="col-2 bg-white rounded-circle py-3 text-center">{ isSelected[1] && <img style={{height:"5vw"}} src="static/Elementosporseparado/7 Las vocales/ojos.png" alt="img" /> }</div>
                        <div className="col-2 bg-white rounded-circle py-3 text-center">{ isSelected[2] && <img style={{height:"6vw"}} src="static/Elementosporseparado/7 Las vocales/oso.png" alt="img" /> }</div>
                        <div className="col-2 bg-white rounded-circle py-3 text-center">{ isSelected[3] && <img style={{height:"4vw"}} src="static/Elementosporseparado/7 Las vocales/oro.png" alt="img" /> }</div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
