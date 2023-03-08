<template>
  <Loading :active="isLoading" />
  <div class="container mt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-white text-decoration-none" to="/activities">找球團</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">活動名稱</li>
      </ol>
    </nav>
    <div class="row row-cols-md-2 justify-content-center">
      <article class="col-md-8">
        <h2>{{ product.title }}</h2>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-48">
      </article>
      <div class="col-md-4 mt-48">
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <hr>
        <div class="h5">價格 {{ product.price }}</div>
        <div class="h6">原價 {{ product.origin_price }}</div>
        <div class="h5">優惠價 {{ product.price }}</div>
        <hr>
        <button
        class="btn btn-outline-danger"
        @click="addToCart(product.id)"
        :enabled="this.status.loadingItem === product.id">
          <div class="spinner-border spinner-border-sm"
          role="status" v-if="this.status.loadingItem === product.id">
            <span class="visually-hidden">Loading...</span>
          </div>
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
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
