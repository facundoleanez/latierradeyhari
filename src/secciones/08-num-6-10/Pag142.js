import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag142 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false])
    const [completed, setCompleted] = useState(false);
    const [good, setGood] = useState(false);
    const [wrong, setWrong] = useState(false);

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

    const handleClickWrong = () => {
        setGood(false);
        setWrong(true);
        playBad();
    }

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
            <div className="row text-center">
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/142.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien" />}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien" />}
                <div className="row alto-15"></div>
                <div className="px-lg-5 col-11 adelante">
                    <img className={isSelected[0] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(0)}} src="static/Elementosporseparado/10 Números del 6 al 10/a-verde.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/7-verde.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/4-verde.png" alt="img"/>
                    <img className={isSelected[1] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(1)}} src="static/Elementosporseparado/10 Números del 6 al 10/e-verde.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/10-verde.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/9-verde.png" alt="img"/>
                    <img className={isSelected[2] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(2)}} src="static/Elementosporseparado/10 Números del 6 al 10/i-verde.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/5-verde.png" alt="img"/>
                    <img className={isSelected[3] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(3)}} src="static/Elementosporseparado/10 Números del 6 al 10/u-verde.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/8-verde.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/2-verde.png" alt="img"/>
                    <img className={isSelected[4] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(4)}} src="static/Elementosporseparado/10 Números del 6 al 10/o-verde.png" alt="img"/>
                </div>
            </div>
            }
        </>
    )
}
