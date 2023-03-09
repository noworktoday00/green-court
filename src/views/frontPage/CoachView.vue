<template>
  <Loading :active="isLoading" />
  <div class="container-fluid px-0">
    <div class="page-banner"></div>
  </div>
  <div class="gradient-bg">
    <div class="container">
      <div class="row row-cols-md-4">
        <div class="p-16" v-for="product in testProducts" :key="product.id">
            <div class="card text-white">
              <div :style="{backgroundImage: 'url(' + product.imageUrl + ')'}"
                     class="card-img-top" alt=""
                     style="height:250px;background-size:cover"></div>
              <div class="card-body">
                <h5 class="card-title"> {{ product.title }} </h5>
                <ul>
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
                    加入購物車
                  </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      testProducts: [],
      product: {},
      isLoading: false,
      status: {
        loadingItem: '',
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
            if (item.category === '教練課') {
              this.testProducts.push(item);
              console.log(this.testProducts);
            }
          });
          this.isLoading = false;
        });
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
          console.log(res);
          this.$httpMessageState(res, '加入購物車');
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
