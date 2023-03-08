<template>
  <Navbar></Navbar>
  <div class="container mt-48 text-white">
    <form class="row justify-content-center" @submit.prevent="logIn">
      <div class="col-md-6">
        <h1 class="h3 mb-16 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address
          </label>
            <input type="email" id="inputEmail"
            class="form-control" placeholder="Email address"
            v-model="user.username" required />
        </div>
        <div class="mb-16">
          <label for="inputPassword" class="sr-only">Password
          </label>
            <input type="password" id="inputPassword"
            class="form-control" placeholder="Password"
            v-model="user.password" required />
        </div>

        <div class="text-end my-16">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';

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
