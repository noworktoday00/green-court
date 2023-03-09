<template>
  <div class="gradient-bg">
    <div class="container py-80">
      <swiper :modules="modules"
              :slides-per-view="1"
              :speed="1000"
              :autoplay="{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }"
              :loop="true"
      >
        <swiper-slide>
          <div class="bg-primary p-80 text-white" style="hieght:1000px">swiper_1</div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-danger p-80 text-white" style="hieght:1000px">swiper_2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-dark p-80 text-white" style="hieght:1000px">swiper_3</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
