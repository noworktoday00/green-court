<template>
  <Loading :active="isLoading" />
  <div class="gradient-bg">
    <div class="container text-white py-80">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-24">
          <li v-if="product.category === '臨打團'" class="breadcrumb-item">
            <router-link class="text-white text-decoration-none" to="/activities">找球團</router-link>
          </li>
          <li v-if="product.category === '教練課'" class="breadcrumb-item">
            <router-link class="text-white text-decoration-none" to="/coach">找教練</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row row-cols-md-2 justify-content-center">
        <article class="col-md-8">
          <img :src="product.imageUrl" alt="" class="img-fluid mb-24">
        </article>
        <div class="col-md-4">
          <h2>{{ product.title }}</h2>
          <div>{{ product.content }}</div>
          <div class="mt-24">{{ product.description }}</div>
          <hr>
          <div v-if="product.category === '臨打團' || product.category === '教練課'">
            <div class="h6">
              費用：
              <br>
               男生：{{ product.origin_price }} / 女生：{{ product.price }}
              </div>
            <hr>
            <div class="h6">
              地點： {{ product.location }}
            </div>
            <div class="h6">
              程度：{{ product.level -1 }} ~ {{ product.level +1 }}
            </div>
            <div class="h6">
              時間： {{ product.date }} / {{ product.time }}
              <br>
              時長：{{ product.hours }} / {{ product.unit }}
            </div>
          </div>
          <div v-else>
            <h5>
              原價:
              <span class="ms-24"><del>{{ product.origin_price }}</del></span>
            </h5>
            <h4>特價：
              <span class="ms-16">{{ product.price }}</span>
            </h4>
          </div>
          <hr>
          <div v-if="product.category === '教練課' || product.category === '臨打團'">
            <iframe :src="product.iframe"
                    class="ms-24"
                    width="360" height="260"
                    title="location"
                    frameborder="0"
                    style="border:0;" allowfullscreen=""
                    aria-hidden="false" tabindex="0">
            </iframe>
          </div>
          <div v-if="product.category === '羽球拍'" class="d-grid">
            <button
            class="btn btn-outline-light mt-8"
            @click="addToCart(product.id)"
            :enabled="this.status.loadingItem === product.id">
              <div class="spinner-border spinner-border-sm"
              role="status" v-if="this.status.loadingItem === product.id">
                <span class="visually-hidden">Loading...</span>
              </div>
              加入購物車
            </button>
          </div>
          <div v-else class="d-grid">
            <button
            class="btn btn-outline-light mt-16"
            @click="addToCart(product.id)"
            :enabled="this.status.loadingItem === product.id">
              <div class="spinner-border spinner-border-sm"
              role="status" v-if="this.status.loadingItem === product.id">
                <span class="visually-hidden">Loading...</span>
              </div>
              我要參加！
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      product: {},
      id: '',
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.product = res.data.product;
          console.log(this.product);
          this.isLoading = false;
        });
    },
    addToCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.status.loadingItem = id;
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.loadingItem = '';
          console.log(res);
          emitter.emit('get-cart');
          this.$httpMessageState(res, '加入購物車');
        });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
