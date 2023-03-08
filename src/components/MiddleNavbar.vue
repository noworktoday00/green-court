<template>
    <div class="container-fluid">
    <div class="row row-cols-2 row-cols-md-4">
      <router-link class="col
                          middle-nav-block
                          d-block bg-primary
                          text-white text-decoration-none
                          text-center py-32" to="/level">
        <img class="mb-16" src="@/assets/svg-icon/level-icon.svg" alt="">
        <h2>等級測驗</h2>
        <p>
          羽球等級測驗試題
          <br>
          您配對適合的球團程度
        </p>
      </router-link>
      <router-link class="col
                          middle-nav-block
                          d-block bg-secondary
                          text-white text-decoration-none
                          text-center py-32" to="/activities">
        <img class="mb-16" src="@/assets/svg-icon/group-icon.svg" alt="">
        <h2>尋找球團</h2>
        <p>
          搜尋合適等級球團
          <br>
          選擇享受運動與挑戰
        </p>
      </router-link>
      <router-link class="col
                          middle-nav-block
                          d-block bg-success
                          text-white text-decoration-none
                          text-center py-32" to="/coach">
        <img class="mb-16" src="@/assets/svg-icon/coach-icon.svg" alt="">
        <h2>搜尋教練</h2>
        <p>
          覺得能力值卡住了？
          <br>
          尋找合適的教練吧！
        </p>
      </router-link>
      <router-link class="col
                          middle-nav-block
                          d-block bg-info
                          text-white text-decoration-none
                          text-center py-32" to="/racket">
        <img class="mb-16" src="@/assets/svg-icon/badminton-icon.svg" alt="">
        <h2>挑選球拍</h2>
        <p>
          羨慕別人手上的武器？
          <br>
          來挑把順手的球拍吧
        </p>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.middle-nav-block{
  &:hover {
    opacity: 0.8;
    img {
      transform: scale(1.2);
    }
    h2 {
      transform: scale(1.2);
    }
    p {
      transform: scale(1.2);
    }
  }
}
</style>
