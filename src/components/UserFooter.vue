<template>
    <footer class="bg-primary">
    <div class="container">
      <div class="row justify-content-between pt-80 pb-48">
        <router-link to="/" class="col-12 col-md-2 d-none d-md-block">
          <img src="@/assets/green-court-logo.svg"
               class="img-fluid mx-auto d-block mb-24" alt="">
          <img src="@/assets/green-court-logo-circle.svg"
               class="img-fluid mx-auto d-block" style="width:200px ;" alt="">
        </router-link>
        <div class="col-12 col-md-8 row justify-content-center p-0">
          <div class="row row-cols-3 justify-content-between mb-48">
            <ul class="col">
              <li class="mb-32 text-center">
                <router-link class="text-white text-decoration-none" to="/about">
                  <p class="link">
                    關於我們
                  </p>
                </router-link>
              </li>
              <li class="mb-32 text-center">
                <router-link class="text-white text-decoration-none" to="/login">
                  <p class="link">
                    登入後台
                  </p>
                </router-link>
              </li>
            </ul>
            <ul class="col">
              <li class="mb-32 text-center">
                <router-link class="text-white text-decoration-none" to="/level">
                  <p class="link">
                    等級檢測
                  </p>
                </router-link>
              </li>
              <li class="mb-32 text-center">
                <router-link class="text-white text-decoration-none" to="/">
                  <p class="link">
                    程度量表
                  </p>
                </router-link>
              </li>
            </ul>
            <ul class="col">
              <li class="mb-32 text-center">
                <router-link class="text-white text-decoration-none" to="/activities">
                  <p class="link">
                    球團尋找
                  </p>
                </router-link>
              </li>
              <li class="mb-32 text-center">
                <router-link class="text-white text-decoration-none" to="/coach">
                  <p class="link">
                    教練協尋
                  </p>
                </router-link>
              </li>
              <li class="mb-32 text-center">
                <router-link class="text-white text-decoration-none" to="/racket">
                  <p class="link">
                    球具挑選
                  </p>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="row row-cols-1 row-cols-md-2 justify-content-between p-24 p-md-0">
            <p class="col text-white">© 2022 By Van.CS </p>
            <p class="col text-white">
              此網站僅做為前端 side project 作品練習，
              <br class="d-block d-md-none">
              無營利用途
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.link {
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    text-decoration: underline;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
