<template>
  <div class="container fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 mt-24">
      <div class="container d-flex justify-content-between">
        <router-link class="navbar-brand" to="/">
            <h1 class="head-logo ms-16 ms-md-48 mb-0">Green-court</h1>
          </router-link>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-32">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/products">產品</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/orders">訂單</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/coupons">優惠卷</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">登入</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.head-logo {
  background-image: url('@/assets/green-court-logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 40px;
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
          }
        });
    },
  },
};
</script>
