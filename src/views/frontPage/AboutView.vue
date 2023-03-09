<template>
  <div class="gradient-bg">
    <div class="container-fluid pt-80 text-white">
      <div class="row mt-48 justify-content-center">
        <!-- section-1 -->
        <div class="col-12 col-md-6 bg-info p-80 mx-0">
          <h3>Green-Court</h3>
          <p class="">
            Green-court 綠場，是一個為了羽球愛好者量身打造的地方，我們都瞭解，若等級沒有匹配，
            很容易造成不愉快的體驗，在這裏您可以透過簡單的測驗找到自己的等級，
            進而挑選合適的球團，我們也提供教練媒合系統，協助您球技上的增長，綠場歡迎您！
          </p>
        </div>
        <div class="col-12 col-md-6 px-0">
          <div class="about-img-1"></div>
        </div>
        <!-- section-2 -->
        <div class="col-12 col-md-2 bg-primary">
            <h2 class="about-title mx-auto my-48">About Us</h2>
        </div>
        <div class="col-12 col-md-6">
            <p class="mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id quis ut dolor ducimus commodi dicta ipsa reprehenderit magnam veritatis?
              Rerum, corporis commodi? Impedit autem,
              alias doloribus natus eaque nam inventore?
            </p>
        </div>
        <div class="col-12 col-md-4 px-0 row">
            <div class="col-4 col-md-12">
              <div class="about-img-2 d-none d-md-block"></div>
            </div>
            <div class="col-4 col-md-12">
              <div class="about-img-3 d-none d-md-block"></div>
            </div>
            <!-- <div class="col-4 col-md-12">
              <div class="about-img-4"></div>
            </div> -->
        </div>
        <!-- section-3 -->
        <div class="col-12 col-md-6 px-0">
            <div class="about-img-5"></div>
        </div>
        <div class="col-12 col-md-6 px-0 bg-secondary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto odit obcaecati libero sit perferendis facilis debitis culpa?
              Libero hic ab est minus aspernatur eaque mollitia,
              harum aliquam doloribus adipisci asperiores!
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-img-1 {
  background-image: url('@/assets/How-to-hit-a-badminton-smash.jpg');
  background-size: cover;
  background-position: center center;
  height: 320px;
}
.about-img-2 {
  background-image: url('@/assets/How-to-hit-a-badminton-smash.jpg');
  background-size: cover ;
  background-position: center center;
  height: 240px;
}
.about-img-3 {
  background-image: url('@/assets/How-to-hit-a-badminton-smash.jpg');
  background-size: cover;
  background-position: center center;
  height: 240px;
}
// .about-img-4 {
//   background-image: url('@/assets/How-to-hit-a-badminton-smash.jpg');
//   background-size: cover;
//   background-position: center center;
//   height: 180px;
// }
.about-img-5 {
  background-image: url('@/assets/How-to-hit-a-badminton-smash.jpg');
  background-size: cover;
  background-position: center center;
  height: 300px;
}
.about-title {
  writing-mode: vertical-lr;
  font-size: 84px;
  @media (max-width:577px) {
    writing-mode: horizontal-tb;
  }
}
</style>

<script>
export default {
};
</script>
