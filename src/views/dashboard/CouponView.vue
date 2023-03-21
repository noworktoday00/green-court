<template>
  <Loading :active="isLoading" />
  <div class="text-end mt-16">
    <button class="btn btn-primary" @click="openCouponModal(true)">建立新的酷碰券</button>
  </div>
  <table class="table mt-16 text-white">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td> {{ coupon.title }} </td>
        <td> {{ coupon.percent }} % </td>
        <td> {{ $filters.date(coupon.due_date) }} </td>
        <td>
          <span v-if="coupon.is_enabled === 1" class="text-white">啟用</span>
          <span v-else class="text-warning">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
            class="btn btn-outline-light btn-sm"
            @click="openCouponModal(false, coupon)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDeleteModal(coupon)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon" />
  <DeleteModal :coupon="tempCoupon" ref="deleteModal" @delete-item="deleteCoupon" />
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: false,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
  },
  props: {
    config: Object,
  },
  components: {
    CouponModal,
    DeleteModal,
  },
  methods: {
    getCoupons() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(url, this.tempCoupon)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.isLoading = false;
          console.log(res.data.coupons);
        });
    },
    openCouponModal(isNew, coupon) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      }
      if (!this.isNew) {
        this.tempCoupon = { ...coupon };
      }
      console.log(this.tempCoupon);
      this.$refs.couponModal.showModal();
    },
    openDeleteModal(coupon) {
      this.tempCoupon = { ...coupon };
      this.$refs.deleteModal.showModal();
    },
    updateCoupon(tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon })
          .then((res) => {
            console.log(res, tempCoupon);
            this.$httpMessageState(res, '新增優惠券');
            this.getCoupons();
            this.$refs.couponModal.hideModal();
          });
      }
      if (!this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(url, { data: tempCoupon })
          .then((res) => {
            console.log(res, tempCoupon);
            this.$httpMessageState(res, '新增優惠券');
            this.getCoupons();
            this.$refs.couponModal.hideModal();
          });
      }
    },
    deleteCoupon() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url)
        .then((res) => {
          console.log(res, this.tempCoupon);
          this.$httpMessageState(res, '刪除優惠券');
          this.$refs.deleteModal.hideModal();
          this.getCoupons();
        });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
