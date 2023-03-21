<template>
  <Loading :active="isLoading" />
  <LandingBanner />
  <div class="container-fluid">
    <div class="row row-cols-md-2 align-items-center">
      <div class="col-12 text-center py-48 py-md-0"
           data-aos="fade-right"
           data-aos-duration="1500">
        <h2 class="h2">關於我們</h2>
        <h3 class="h3 mb-48">About Us</h3>
        <p>
          我們運用等級參考匹配的方式，讓您可以媒合到最合適的球團，
          <br>
          在當中享受運動的樂趣。
        </p>
        <p>
          在這裏，也可以依照需求，找到適合你的教練，讓自己有所提升。
          <br>
          也歡迎您到我們的商城，尋找適合自己的球具。
        </p>
        <router-link to="/about"
                     class="fs-4 btn btn-outline-dark mt-md-48 px-48">
                     更多了解綠場
        </router-link>
      </div>
        <div class="col-12 px-0 about-side-img"
             data-aos="zoom-in"
             data-aos-duration="1500"></div>
    </div>
  </div>
  <MiddleNavbar />
  <div class="gradient-bg my-0 ps-0">
    <div class="container py-24 py-md-64">
      <section class="group-section my-48">
        <div class="d-flex justify-content-center mb-16"
             data-aos="zoom-in"
             data-aos-duration="1200">
          <img src="@/assets/svg-icon/badminton-icon.svg" class="img-fluid me-16" alt="">
          <h3 class="h3 text-white mb-0">熱門球團</h3>
        </div>
          <p class="text-white text-center px-32"
             data-aos="fade-up"
             data-aos-duration="800">
            找不到球打嗎？不用擔心！
            這邊提供熱門球團做為參考，
            可依照程度斟酌報名，
            肯定能找到可以打的痛快的球團！
          </p>
          <div class="row justify-content-center">
            <div class="col-10 group-card row row-cols-1 row-cols-md-3">
              <div class="p-24 p-md-8" v-for="item in activitiesSelect" :key="item.id">
                <div class="card card-opacity text-white">
                <div :style="{backgroundImage: 'url(' + item.imageUrl + ')'}"
                     class="card-img-top card-image" alt="">
                     <div class="d-flex mx-auto justify-content-between pt-8 px-24">
                        <p class="fs-4 text-white">
                           Lv. {{ item.level }}
                        </p>
                        <i class="fs-4 bi bi-star text-white"></i>
                     </div>
                </div>
                <div class="card-body pt-16">
                  <h4 class="card-title text-center">{{item.title}}</h4>
                  <hr>
                  <h5 class="text-center">{{item.location}}</h5>
                  <ul class="card-text list-unstyled mt-4">
                    <li>合適等級: Lv{{ item.level -1 }} ~ Lv{{ item.level +1 }}</li>
                    <li class="mt-8">費用:
                        <br>
                        男：{{ item.origin_price }}元 / 女：{{ item.price }}元</li>
                    <li class="mt-8">
                      時間:
                      <br class="d-block d-md-none">
                      {{ item.date }} / {{ item.time }}  ({{ item.hours }}小時)
                    </li>
                    <li class="mt-8">名額: {{ item.members }} 人</li>
                    <li>場地數： {{ item.court }} 面</li>
                  </ul>
                  <div class="d-grid gap-2">
                    <a href="#"
                       class="btn btn-outline-primary"
                       @click.prevent="showDetail(item.id)">
                      查看球團資料
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
      <section class="coach-section my-64">
        <div class="d-flex justify-content-center mb-16"
             data-aos="zoom-in"
             data-aos-duration="1200">
          <img src="@/assets/svg-icon/badminton-icon.svg" class="img-fluid me-16" alt="">
          <h3 class="h3 text-white mb-0">教練課程</h3>
        </div>
          <p class="text-white text-center px-32"
             data-aos="fade-up"
             data-aos-duration="800">
            羨慕別人精準的控球與靈巧的步伐嗎？
            無論你是小萌新，抑或是馳程球場多年的老球皮
            在這裡，都可以找到合適的教練協助您進步
          </p>
          <div class="coach-card row row-cols-1 row-cols-md-2">
            <div class="p-24 p-md-8" v-for="item in coachesSelect" :key="item.id">
              <div class="card-opacity text-white rounded row g-0 position-relative">
                <div class="col-md-6 mb-md-0 p-0">
                  <div :style="{backgroundImage: 'url(' + item.imageUrl + ')'}"
                       class="rounded-start"
                       alt=""
                       style="height:250px;background-size:cover"></div>
                </div>
                <div class="col-md-6 ps-md-4 py-16 d-flex flex-column justify-content-between">
                  <h5 class="mt-0 ps-24">{{ item.title }}</h5>
                  <ul class="list-unstyled ps-24">
                    <li>年資: {{ item.experience }}</li>
                    <li>時間: {{ item.date }} {{ item.time }}</li>
                    <li>地點: {{ item.location }}</li>
                    <li>
                      教學項目:
                      <br>
                      {{ item.content }}
                    </li>
                  </ul>
                    <a href="#" class="text-white text-end pe-16"
                       @click.prevent="showDetail(item.id)">
                      了解教練資訊
                    </a>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section class="racket-section my-64">
        <div class="d-flex justify-content-center mb-16"
             data-aos="zoom-in"
             data-aos-duration="1200">
          <img src="@/assets/svg-icon/badminton-icon.svg" class="img-fluid me-16" alt="">
          <h3 class="h3 text-white mb-0">熱門球具</h3>
        </div>
        <p class="text-white text-center px-32"
           data-aos="fade-up"
           data-aos-duration="800">
          球技不如人？沒關係，至少我們裝備要好，
          綠場也提供各式球具，協助您提升裝備，
          無論攻擊系，防禦系或者全能王者，都能找到適合的球拍！
        </p>
        <div class="racket-card row row-cols-1 row-cols-md-5">
          <div class="p-16 p-md-8" v-for="item in racketsSelect" :key="item.id">
              <div class="card card-opacity h-100">
              <img :src="item.imageUrl" class="card-img-top" alt="">
              <div class="card-body text-center text-white">
                <h5 class="card-title">{{ item.title }}</h5>
                <ul class="card-text list-unstyled">
                  <li class="fs-6"> {{ item.description }}</li>
                  <li class="fs-3">NT$ {{ item.price }}</li>
                </ul>
                <div class="d-grid">
                  <a href="#" alt=""
                     class="btn btn-outline-primary"
                     @click.prevent="showDetail(item.id)"
                     >
                    查看球拍詳情
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.about-side-img {
  background-image: url('@/assets/How-to-hit-a-badminton-smash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 60vh;
  opacity: 0.9;
  &:hover{
    opacity: 1;
    background-size: 105%;
    }
}
.card-image {
  height:200px;
  background-size:cover;
}
</style>

<script>
import LandingBanner from '@/components/LandingBanner.vue';
import MiddleNavbar from '@/components/MiddleNavbar.vue';

export default {
  components: {
    LandingBanner,
    MiddleNavbar,
  },
  data() {
    return {
      activities: [],
      activitiesSelect: [],
      coaches: [],
      coachesSelect: [],
      rackets: [],
      racketsSelect: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          res.data.products.forEach((item) => {
            if (item.category === '臨打團') {
              this.activities.push(item);
            }
            if (item.category === '教練課') {
              this.coaches.push(item);
            }
            if (item.category === '羽球拍') {
              this.rackets.push(item);
            }
          });
          this.activitiesSelect = this.activities.slice(0, 3);
          this.coachesSelect = this.coaches.slice(0, 4);
          this.racketsSelect = this.rackets.slice(0, 5);
          this.isLoading = false;
          console.log(this.racketsSelect);
        });
    },
    showDetail(id) {
      this.$router.push(`/activities/${id}`);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
