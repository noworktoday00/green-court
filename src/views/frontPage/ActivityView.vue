<template>
  <Loading :active="isLoading" />
  <ProductBanner />
  <div class="gradient-bg">
    <div class="container py-24">
      <div v-if="!levelMatchProducts.length == 0">
        <p class="fs-3 text-white text-center">等級媒合球團</p>
        <swiper :breakpoints="swiperOptions.breakpoints"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                >
          <swiper-slide v-for="product in levelMatchProducts" :key="product.id">
            <div class="card card-opacity text-white">
                <div :style="{backgroundImage: 'url(' + product.imageUrl + ')'}"
                       class="card-img-top" alt=""
                       style="height:250px;background-size:cover"></div>
                <div class="card-body">
                  <h5 class="card-title"> {{ product.title }} </h5>
                  <ul class="list-unstyled">
                    <li>時間：{{ product.time }} {{  product.unit}}</li>
                    <li>地點：{{ product.location }}</li>
                    <li>等級： {{ product.level - 1 }}~{{ product.level + 1 }}</li>
                    <li>費用： {{ product.price }}</li>
                  </ul>
                  <div class="row">
                    <div class="btn-group">
                      <button
                      class="btn btn-outline-primary"
                      @click="showDetail(product.id)">
                      查看更多
                    </button>
                      <button
                      class="btn btn-outline-secondary"
                      @click="addToCart(product.id)"
                      :disabled="this.status.loadingItem === product.id">
                      <div class="spinner-border spinner-border-sm"
                      role="status" v-if="this.status.loadingItem === product.id">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      參加球團
                    </button>
                    </div>
                  </div>
                </div>
              </div>
          </swiper-slide>
        </swiper>
      </div>
      <p class="fs-3 text-white text-center">全部球團</p>
      <swiper :breakpoints="swiperOptions.breakpoints"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                >
          <swiper-slide v-for="product in testProducts" :key="product.id">
            <div class="card card-opacity text-white">
                <div :style="{backgroundImage: 'url(' + product.imageUrl + ')'}"
                       class="card-img-top" alt=""
                       style="height:250px;background-size:cover"></div>
                <div class="card-body">
                  <h5 class="card-title"> {{ product.title }} </h5>
                  <ul class="list-unstyled">
                    <li>時間：{{ product.time }} {{  product.unit}}</li>
                    <li>地點：{{ product.location }}</li>
                    <li>等級： {{ product.level - 1 }}~{{ product.level + 1 }}</li>
                    <li>費用： {{ product.price }}</li>
                  </ul>
                  <div class="row">
                    <div class="btn-group">
                      <button
                      class="btn btn-outline-primary"
                      @click="showDetail(product.id)">
                      查看更多
                    </button>
                      <button
                      class="btn btn-outline-secondary"
                      @click="addToCart(product.id)"
                      :disabled="this.status.loadingItem === product.id">
                      <div class="spinner-border spinner-border-sm"
                      role="status" v-if="this.status.loadingItem === product.id">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      參加球團
                    </button>
                    </div>
                  </div>
                </div>
              </div>
          </swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<script>
import ProductBanner from '@/components/ProductBanner.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import emitter from '@/methods/emitter';

import 'swiper/swiper.css';

export default {
  components: {
    ProductBanner,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
      testProducts: [],
      product: {},
      level: 0,
      levelMatchProducts: [],
      isLoading: false,
      status: {
        loadingItem: '',
      },
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          770: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
          771: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        },
      },
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products;
          this.products.forEach((item) => {
            if (item.category === '臨打團') {
              this.testProducts.push(item);
            }
            if (this.level === item.level + 1 || this.level === item.level - 1) {
              if (item.category === '臨打團') {
                this.levelMatchProducts.push(item);
              }
            }
          });
          console.log('全部零打團', this.testProducts);
          console.log('媒合等級', this.levelMatchProducts);
          this.isLoading = false;
        });
    },
    getLevel() {
      const levelStr = localStorage.getItem('level');
      this.level = parseInt(levelStr, 10);
      console.log(this.level);
    },
    showDetail(id) {
      this.$router.push(`/activities/${id}`);
    },
    addToCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.loadingItem = '';
          // console.log(res);
          emitter.emit('get-cart');
          this.$httpMessageState(res, '加入購物車');
        });
    },
  },
  created() {
    this.getProducts();
    this.getLevel();
  },
};
</script>
