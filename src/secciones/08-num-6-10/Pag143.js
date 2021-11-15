import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag143 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false, false, false])
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
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/143.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/bien.png" alt="bien" />}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn adelante ancho-10" src="static/Elementosporseparado/mal.png" alt="bien" />}
                <div className="row alto-15"></div>
                <div className="row adelante justify-content-center">
                    <div className={isSelected[0] ? "circulo bg-danger animate__animated animate__rotateIn" : " img-hover circulo bg-primary"} onClick={()=>{handleClickTrue(0)}}><h1 className="letra-circulo">7</h1></div>
                    <div className="img-hover circulo bg-primary" onClick={()=>{handleClickWrong()}}><h1 className="letra-circulo">O</h1></div>
                    <div className={isSelected[1] ? "circulo bg-danger animate__animated animate__rotateIn" : "img-hover circulo bg-primary"} onClick={()=>{handleClickTrue(1)}}><h1 className="letra-circulo">5</h1></div>
                    <div className="img-hover circulo bg-primary" onClick={()=>{handleClickWrong()}}><h1 className="letra-circulo">U</h1></div>
                    <div className={isSelected[2] ? "circulo bg-danger animate__animated animate__rotateIn" : "img-hover circulo bg-primary"} onClick={()=>{handleClickTrue(2)}}><h1 className="letra-circulo">10</h1></div>
                    <div className={isSelected[3] ? "circulo bg-danger animate__animated animate__rotateIn" : "img-hover circulo bg-primary"} onClick={()=>{handleClickTrue(3)}}><h1 className="letra-circulo">9</h1></div>
                </div>
                <div className="row adelante justify-content-center">
                    <div className="img-hover circulo bg-primary" onClick={()=>{handleClickWrong()}}><h1 className="letra-circulo">E</h1></div>
                    <div className={isSelected[4] ? "circulo bg-danger animate__animated animate__rotateIn" : "img-hover circulo bg-primary"} onClick={()=>{handleClickTrue(4)}}><h1 className="letra-circulo">4</h1></div>
                    <div className="img-hover circulo bg-primary" onClick={()=>{handleClickWrong()}}><h1 className="letra-circulo">A</h1></div>
                    <div className={isSelected[5] ? "circulo bg-danger animate__animated animate__rotateIn" : "img-hover circulo bg-primary"} onClick={()=>{handleClickTrue(5)}}><h1 className="letra-circulo">1</h1></div>
                    <div className="img-hover circulo bg-primary" onClick={()=>{handleClickWrong()}}><h1 className="letra-circulo">I</h1></div>
                    <div className={isSelected[6] ? "circulo bg-danger animate__animated animate__rotateIn" : "img-hover circulo bg-primary"} onClick={()=>{handleClickTrue(6)}}><h1 className="letra-circulo">8</h1></div>
                </div>
                {/* <div className="px-lg-5 col-11 adelante">
                    <img className={isSelected[0] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(0)}} src="static/Elementosporseparado/10 Números del 6 al 10/7-violeta.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/o-violeta.png" alt="img"/>
                    <img className={isSelected[1] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(1)}} src="static/Elementosporseparado/10 Números del 6 al 10/5-violeta.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/u-violeta.png" alt="img"/>
                    <img className={isSelected[2] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(2)}} src="static/Elementosporseparado/10 Números del 6 al 10/10-violeta.png" alt="img"/>
                    <img className={isSelected[3] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(3)}} src="static/Elementosporseparado/10 Números del 6 al 10/9-violeta.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/e-violeta.png" alt="img"/>
                    <img className={isSelected[4] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(4)}} src="static/Elementosporseparado/10 Números del 6 al 10/4-violeta.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/a-violeta.png" alt="img"/>
                    <img className={isSelected[5] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(5)}} src="static/Elementosporseparado/10 Números del 6 al 10/1-violeta.png" alt="img"/>
                    <img className="img-hover alto-10 m-2" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/i-violeta.png" alt="img"/>
                    <img className={isSelected[6] ? "selected alto-10 m-2 animate__animated animate__rubberBand" : "img-hover alto-10 m-2"} onClick={()=>{handleClickTrue(6)}} src="static/Elementosporseparado/10 Números del 6 al 10/8-vioelta.png" alt="img"/>
                </div> */}
            </div>
            }
        </>
    )
}
