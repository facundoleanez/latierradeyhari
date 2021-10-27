import React, { useEffect,useState } from 'react'
import { BienHecho } from '../../components/BienHecho'

export const Pag135 = ({playBad, playGood}) => {

    const [isSelected, setIsSelected] = useState([false, false, false, false, false, false])
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
                <img className="position-absolute top-50 start-50 translate-middle p-0 m-0" src="static/Diapositivas PNG/135.png" alt="pag-19"/>
                { good && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/bien.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                { wrong && <img className="position-absolute animate__animated animate__bounceIn" src="static/Elementosporseparado/mal.png" alt="bien" style={{zIndex:2, width:"10vw"}}/>}
                <div className="row" style={{height:"15vw"}}></div>
                <div className="px-lg-5 col-11 adelante">
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-2.png" style={{height:"10vw"}} />
                    <img className={isSelected[0] ? "selected" : "img-hover"} onClick={()=>{handleClickTrue(0)}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-1.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-3.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-5.png" style={{height:"10vw"}} />
                    <img className={isSelected[1] ? "selected" : "img-hover"} onClick={()=>{handleClickTrue(1)}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-4.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-6.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-8.png" style={{height:"10vw"}} />
                    <img className={isSelected[2] ? "selected" : "img-hover"} onClick={()=>{handleClickTrue(2)}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-7.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-10.png" style={{height:"10vw"}} />
                    <img className={isSelected[3] ? "selected" : "img-hover"} onClick={()=>{handleClickTrue(3)}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-9.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-11.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-15.png" style={{height:"10vw"}} />
                    <img className={isSelected[4] ? "selected" : "img-hover"} onClick={()=>{handleClickTrue(4)}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-12.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-2.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-3.png" style={{height:"10vw"}} />
                    <img className={isSelected[5] ? "selected" : "img-hover"} onClick={()=>{handleClickTrue(5)}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-13.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-5.png" style={{height:"10vw"}} />
                    <img className="img-hover" onClick={()=>{handleClickWrong()}} src="static/Elementosporseparado/10 Números del 6 al 10/corazon-16.png" style={{height:"10vw"}} />
                </div>
            </div>
            }
        </>
    )
}
