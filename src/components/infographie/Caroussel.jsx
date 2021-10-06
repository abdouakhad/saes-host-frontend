import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../src/styles.css'


//Images to show the carroussels
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';

const imgs = [img1, img2, img3, img4, img5, img6];
const responsive = {
    0: {
      items: 1
    },
    680: {
      items: 3
    },
    1024: {
      items: 4
    }
};
function Caroussel(){
    return (
        <div className = 'bg-black pt-5 mb-7 lg:w-9/12 md:w-10/12 w-11/12 m-auto rounded-lg px-5 m-auto '>
            <AliceCarousel responsive={responsive} animationDuration = '1000' animationType = 'slide'
                autoPlay = {true} infinite = {true}
            >
                {imgs.map((img)=>{
                   return(<img src={img} className=" rounded-lg shadow md:w-11/12 w-6/12  m-auto" alt=""/>)
                })}
            </AliceCarousel>
        </div>
    )
}

export default Caroussel;