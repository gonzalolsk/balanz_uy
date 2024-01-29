"use client"
import React, {useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css";
import Button from '@/app/ui/atoms/button/Button';
import ImgLogoInvertir from '@/public/images/banner-home/tiempo-de-invertir.png';
import Image from "next/image";


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [mobile, setMobile] = useState(false)

    useEffect(()=>{
        if (screen.width < 768) {
            setMobile(true)      
        }
        else{
            setMobile(false)
        } 
    }, [])

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel controls={true} activeIndex={index} onSelect={handleSelect} className="blnz-carousel" interval={6000}>
           
           <Carousel.Item className={` white`}>
                <div className={mobile ?'mobile-banner1' : 'desktop-banner1' }></div>
                <div className="item-inner">
                    <div className="container d-flex align-items-center">
                    <Carousel.Caption className="brand">
                        <h3 className="fw-light animate__animated animate__fadeInUp title-banner-1"  style={{ animationDelay:"0.1s", color:"#ffff" }}>
                            El mejor lugar para tus inversiones
                        </h3>
                        <p className="fw-light fs-5">
                            Brindamos asesoramiento personalizado 
                            y soluciones financieras a medida, acompañando 
                            tus necesidades y objetivos. 
                        </p>
                    </Carousel.Caption>
                    </div>
                </div>
            </Carousel.Item> 


            <Carousel.Item className={`white`}>
                <div className={mobile ?'mobile-banner2' : 'desktop-banner2' }></div>
                <div className="item-inner">
                    <div className="container d-flex align-items-center">
                    <Carousel.Caption>
                        <Image src={ImgLogoInvertir.src} alt="timepo de invertir" className="img-fluid" width={ImgLogoInvertir.width} height={ImgLogoInvertir.height} />
                        <div className="text-left animate__animated animate__fadeInUp" style={{ animationDelay:"0.35s" }}>
                            <Button className={'btn-home bold  big-btn blue-btn mx-auto w-auto mt-4' } onClick={() => { window.open("https://www.youtube.com/watch?v=_CN6kqknW54&ab_channel=Balanz", "_blank") }} >Ver más </Button>
                        </div>
                    </Carousel.Caption>
                    </div>
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

export default ControlledCarousel;