import "../Page1/P1_S6.scss"
import { Photo } from "../../Photo"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function P1_S6(){
    return(
        <>
            <section className="Sec6">
                <div className="Centr">
                    <h1>Our customers say</h1>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    
                   >
                    <SwiperSlide>
                        <div className="Girl">
                        <img src={Photo.G}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img  src={Photo.two}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img  src={Photo.three}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img  src={Photo.four}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img  src={Photo.five}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img src={Photo.six}></img>
                       <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img src={Photo.seven}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                    <div className="niz">
                        <img className="bbb" src={Photo.one}></img>
                        <img className="bb" src={Photo.two}></img>
                        <img className="b" src={Photo.three}></img>
                        <img src={Photo.four}></img>
                        <img className="b" src={Photo.five}></img>
                        <img className="bb" src={Photo.six}></img>
                        <img className="bbb" src={Photo.seven}></img>
                    </div>
                </div>
            </section>
        </>
    )
}