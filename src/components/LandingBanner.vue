<template>
    <div class="banner-bg">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col order-last order-md-first align-self-center"
             data-aos="fade-right" data-aos-duration="2000">
            <div class="d-flex align-items-center">
              <img src="@/assets/green-court-logo-circle.svg"
                   class="ms-24 ms-md-0 me-24 me-md-32"
                   alt="green-court-logo-circle">
              <h2 class="h2 text-white text-center mb-0">
                GREEN-COURT
                <br>
                Badminton CLUB
              </h2>
            </div>
            <h6 class="fs-6 text-white mt-32 px-16 px-md-0">
              我們運用等級參考匹配的方式，讓您可以媒合到最合適的球團，在當中享受運動的樂趣。
              在這裏，也可以依照需求，找到適合你的教練，讓自己有所提升。
              也歡迎您到我們的商城，尋找適合自己的球具。
            </h6>
            <div class="mt-48 text-center text-md-start">
              <router-link to="/activities" class="btn btn-outline-light px-80">開始尋找球團</router-link>
            </div>
        </div>
          <div class="col banner-right order-first order-md-last mt-80">
            <div class="banner-right-bg" data-aos="zoom-in" data-aos-duration="2000">
              <img src="@/assets/badminton-line.svg" class="img-fluid"
                   alt="">
            </div>
            <div class="banner-right-player" data-aos="fade-up-right" data-aos-duration="3000">
              <img src="@/assets/wp2094182-scaled-png.png" class="img-fluid"
                   alt="">
            </div>
            <div class="banner-right-subtitle d-none d-md-block">
              <div class="d-flex">
                <img src="@/assets/svg-icon/badminton-icon.svg" class="img-fluid me-16"
                     alt="" style="width: 24px;">
                <h3 class="fs-2 text-white mb-0">Let's Play</h3>
              </div>
              <p class="fs-6 text-white mt-16">
                歡迎來到 綠場羽球俱樂部，
                <br>
                我們期望能提供您最愉快的羽球體驗。
                <br>
                帶您感受到這項運動所帶來的快樂。
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner-bg {
  background-image: url(@/assets/bannerBG.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  .banner-right {
    position: relative;
    height: 90vh;
    @media (max-width:577px) {
      height: 50vh;
    }
    .banner-right-player {
      position: absolute;
      width: 60%;
      top: 5%;
      left: 10%;
      @media (max-width:577px) {
        top: 0%;
        left: 25%;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    .banner-right-bg {
      position: absolute;
      width: 70%;
      top:15%;
      left: 5%;
      animation:banner-right-bg 30s ease-in infinite alternate;
      @keyframes banner-right-bg {
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
      }
      @media (max-width:577px) {
        top: 12%;
        left: 12%;
      }
    }
    .banner-right-subtitle {
      position: absolute;
      top: 70%;
      right: 2%;
    }
  }
}
</style>

<script>
</script>
