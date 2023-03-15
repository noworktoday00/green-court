<template>
  <Navbar></Navbar>
  <ProductBanner />
  <div class="gradient-bg">
    <div class="container py-24 text-white">
      <form class="row justify-content-center" @submit.prevent="logIn">
        <div class="col-md-6">
          <h1 class="h3 mb-16 font-weight-normal">請先登入</h1>
          <div class="mb-16">
            <label for="inputEmail" class="sr-only">帳號
            </label>
              <input type="email" id="inputEmail"
              class="form-control" placeholder="Email address"
              v-model="user.username" required />
          </div>
          <div class="mb-16">
            <label for="inputPassword" class="sr-only">密碼
            </label>
              <input type="password" id="inputPassword"
              class="form-control" placeholder="Password"
              v-model="user.password" required />
          </div>
          <div class="text-end my-16 d-grid">
            <button class="btn btn-lg btn-outline-light btn-block" type="submit">登入</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/DashboardNavbar.vue';
import ProductBanner from '@/components/ProductBanner.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  components: {
    Navbar,
    ProductBanner,
  },
  methods: {
    logIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            // console.log(token, new Date(expired));
            document.cookie = `greenCourtToken=${token}; expires=${new Date(expired)}`;
            // console.log(res);
            this.$router.push('/dashboard/products');
          }
        });
    },
  },
};
</script>
