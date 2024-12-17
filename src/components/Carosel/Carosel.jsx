import { Box, Grid } from "@mui/material";
import './Carosel.css';
import Imagesds from '../../Models/Imagesds.json'

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";




function Carrosel() {
    
  const jsonText = JSON.stringify(Imagesds, null, 2);


  function ExtractJSON(JsonName, key) {
    try {
      // Convert the JSON in JS
      const JsonName = JSON.parse(jsonText);
      
      // Access JSONs key if exists
      if (JsonName[key]) {
        return JsonName[key];
      } else {
        console.log("No such key in JSON.");
        return null;
      }

    } catch (error) {
      console.error("Error to read JSON:", error.message);
      return null;
    }
  }
  
  const images = ExtractJSON(Imagesds, "images");
  
  let image1, image2, image3, image4, sorted_images;

  sorted_images = images.sort((a, b) => b.matches - a.matches)

  image1 = sorted_images[0];
  image2 = sorted_images[1];
  image3 = sorted_images[2];
  image4 = sorted_images[3]
  

  return (
    <>
      <Grid className="espaso">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide data-hash="slide1"><img src={image1.path}  alt="" /></SwiperSlide>
          <SwiperSlide data-hash="slide2"><img src={image2.path}  alt="" /></SwiperSlide>
          <SwiperSlide data-hash="slide3"><img src={image3.path}  alt="" /></SwiperSlide>
          <SwiperSlide data-hash="slide3"><img src={image4.path}  alt="" /></SwiperSlide>

        </Swiper>
      </Grid>
    </>
  );
}
export default Carrosel;