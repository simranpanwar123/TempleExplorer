import './gallery.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
function Gallery(){
  return(
    <div className="hero-container">
<Swiper
modules={[Autoplay]}
spaceBetween={0}
slidesPerView={1}
loop={true}
autoplay={{ delay:3000,
    disableOnInteraction:false
 }}
className="hero-swiper"
>

<SwiperSlide>
<img src="1.webp" alt="temple"/>
</SwiperSlide>
<SwiperSlide>
<img src="2.jpg" alt="temple"/>
</SwiperSlide>

<SwiperSlide>
<img src="7.jpg" alt="temple"/>
</SwiperSlide>

<SwiperSlide>
<img src="4.jfif" alt="temple"/>
</SwiperSlide>

<SwiperSlide>
<img src="5.jfif" alt="temple"/>
</SwiperSlide>

<SwiperSlide>
<img src="6.webp" alt="temple"/>
</SwiperSlide>

<SwiperSlide>
<img src="2.jfif" alt="temple"/>
</SwiperSlide>

</Swiper>



</div>


    // <section className="gallery">

    //   <h2>Temple Gallery</h2>
    //   <TempleCarousel/>

    //   {/* <div className="gallery-grid">
    //     <img src="1.jfif"/>
    //     <img src="2.jfif"/>
    //     <img src="3.jfif"/>
    //     <img src="5.jfif"/>
    //     <img src="4.jfif"/>
    //     <img src="tem.jfif" />
    //   </div> */}

    // </section>
  )
}
    
  

export default Gallery;