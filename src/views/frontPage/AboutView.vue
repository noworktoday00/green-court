<template>
  <Loading :active="isLoading" />
  <div class="gradient-bg">
    <div class="container-fluid pt-80 text-white">
      <div class="row mt-48 justify-content-center">
        <!-- section-1 -->
        <div class="col-12 col-md-6 bg-info p-80 mx-0 order-2 order-md-1">
          <h3>Green-Court</h3>
          <p class="mt-24">
            Green-court 綠場，是一個為了羽球愛好者量身打造的地方，我們都瞭解，若等級沒有匹配，
            很容易造成不愉快的體驗，在這裏您可以透過簡單的測驗找到自己的等級，
            進而挑選合適的球團，我們也提供教練媒合系統，協助您球技上的增長，綠場歡迎您！
          </p>
        </div>
        <div class="col-12 col-md-6 px-0 order-3 order-md-2">
          <div class="about-img-1"></div>
        </div>
        <!-- section-2 -->
        <div class="col-12 col-md-2 bg-primary order-1 order-md-3">
            <h2 class="about-title mx-auto my-48">About Us</h2>
        </div>
        <div class="col-12 col-md-6 oeder-4 order-md-4 p-80 mx-0">
            <ul class="list-unstyled">
              <li>
                <h4>資源豐富的球團</h4>
                <p>在這裏，不管您的程度為何，我們網羅許多球團，只要您願意打，不管是悠閒享受羽球活動亦或者嗜血渴望廝殺，都可以找到合適的球團。</p>
              </li>
              <li class="mt-24">
                <h4>合適程度的教練</h4>
                <p>精進技能不僅能獲得更多樂趣，也是讓自身防護更好，在羽球這條路上走得更遠的方法，綠場與各等級教練合作，從學童培訓專業到甲組退役教練，絕對能滿足您學習的需求。</p>
              </li>
              <li class="mt-24">
                <h4>種類豐富的球拍</h4>
                <p>我們也網羅了許多知名羽球運動相關品牌的球拍，您可以在這邊挑選合適的球拍，無論是攻擊型、防守型或者較全面的手感，都可以在這邊獲得合適的武器，歡迎參觀選購！</p>
              </li>
            </ul>
        </div>
        <div class="col-12 col-md-4 px-0 row order-5 order-md-5">
            <div class="col-4 col-md-12">
              <div class="about-img-2 d-none d-md-block"></div>
            </div>
            <div class="col-4 col-md-12">
              <div class="about-img-3 d-none d-md-block"></div>
            </div>
        </div>
      </div>
        <!-- section-3 -->
        <div class="row">
          <div class="col-12 col-md-6 px-0">
              <div class="about-img-5"></div>
          </div>
          <div class="col-12 col-md-6 bg-secondary p-80 mx-0">
              <p>
                羽球是一項充滿樂趣以及身體協調性、思考全面性的運動，不只鬥力、也鬥智。
                在球場上享受運動的樂趣之餘，綠場也提醒您，無論如何需注意球場禮節，並且保持愉快的心情，
                千萬不要勝負魔人上身，好好的讓自己以及其他球友一同享受愉快的羽球生活！
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
  height: 360px;
}
.about-img-2 {
  background-image: url('@/assets/group_add_FILL0_wght400_GRAD0_opsz48.jpeg');
  background-size: cover ;
  background-position: center center;
  height: 280px;
}
.about-img-3 {
  background-image: url('@/assets/badminton-scaled.jpg');
  background-size: cover;
  background-position: center center;
  height: 280px;
}
// .about-img-4 {
//   background-image: url('@/assets/How-to-hit-a-badminton-smash.jpg');
//   background-size: cover;
//   background-position: center center;
//   height: 180px;
// }
.about-img-5 {
  background-image: url('@/assets/badminton_smash_tips_tricks-1024x664.jpg');
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
