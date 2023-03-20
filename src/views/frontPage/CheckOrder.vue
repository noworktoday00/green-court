<template>
  <ProductBanner />
  <div class="gradient-bg">
    <div class="py-48 row justify-content-center">
      <form action="" class="col-md-6" @submit.prevent="payOrder">
        <table class="table align-middle text-white">
          <thead>
            <th>日期</th>
            <th>品名</th>
            <th>人數</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.date }} / {{ item.product.time }}</td>
              <td> {{ item.product.title }} </td>
              <td> {{item.qty}} / 人</td>
              <td> {{ item.product.price }} </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>總計</td>
              <td> {{ order.total }} </td>
            </tr>
          </tfoot>
        </table>
        <table class="table text-white">
          <tbody>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="order.is_paid === false" class="text-end">
          <button class="btn btn-outline-danger">確認付款</button>
        </div>
        <div v-else class="text-end">
          <router-link to="/activities" class="btn btn-outline-primary">
            查看其他球團活動
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ProductBanner from '@/components/ProductBanner.vue';

export default {
  components: {
    ProductBanner,
  },
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.order;
          console.log(this.order);
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.$httpMessageState(res, '付款完成');
            this.getOrder();
          }
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  },
};
</script>
