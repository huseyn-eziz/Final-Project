import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './style.module.css'

const AdsBannerSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div className='container mt-5 px-5  w-auto  '>
            <div className="row">
                <div >
                    <Slider  {...settings} >
                        <div >
                            <img src="./homeslide.png" alt="" />
                        </div>
                        <div>
                            <img  className={styles.vsimg} src="./vs.png" alt="" />
                        </div>
                        <div>
                            <img src="./brand.png" alt="" />
                        </div>
                        <div>
                            <img src="./nature.png" alt="" />
                        </div>
                        <div>
                            <img src="./classic.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default AdsBannerSlider