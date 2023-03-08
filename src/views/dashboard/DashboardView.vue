<template>
  <Navbar />
  <div class="gradient-bg">
    <div class="container-fluid mt-48">
      <div class="row">
        <div class="col-2">
          <ul class="list-group mt-48">
            <li class="list-group-item">
              <router-link
              class="nav-item d-block text-dark text-decoration-none"
              to="/dashboard/products">產品列表</router-link>
            </li>
            <li class="list-group-item">
              <router-link
              class="nav-item d-block  text-dark text-decoration-none"
              to="/dashboard/orders">訂單列表</router-link>
            </li>
            <li class="list-group-item">
              <router-link
              class="nav-item d-block text-dark text-decoration-none"
              to="/dashboard/coupons">優惠券列表</router-link>
            </li>
          </ul>
        </div>
        <div class="col-10">
          <router-view />
          <ToastMessages />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    Navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)greenCourtToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login');
        }
      });
  },
};
</script>
