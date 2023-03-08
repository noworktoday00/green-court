<template>
  <div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">新增折價券</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-16">
          <label for="title">名稱</label>
          <input
          type="text"
          class="form-control"
          id="title"
          placeholder="請輸入折價券名稱"
          v-model="tempCoupon.title">
        </div>
        <div class="mb-16">
          <label for="coupon_code">優惠碼</label>
          <input
          type="text"
          class="form-control"
          id="coupon_code"
          placeholder="請輸入優惠碼"
          v-model="tempCoupon.code">
        </div>
        <div class="mb-16">
          <label for="due_date">到期日</label>
          <input
          type="date"
          class="form-control"
          id="due_date"
          v-model="due_date">
        </div>
        <div class="mb-16">
          <label for="title">折扣百分比</label>
          <input
          type="number"
          class="form-control"
          id="price"
          placeholder="請輸入折扣百分比"
          v-model="tempCoupon.percent">
        </div>
        <div class="mb-16">
          <div class="form-check form-switch">
            <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            aria-checked="true"
            id="is_enabled"
            :true-value="1"
            :false-value="0"
            v-model="tempCoupon.is_enabled">
            <label class="form-check-label" for="is_enabled">是否啟用</label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button
        type="button"
        class="btn btn-primary"
        @click="$emit('update-coupon', tempCoupon)">更新優惠券</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  props: {
    coupon: {},
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      // 將時間格式改為 YYYY-MM-DD
      console.log(this.tempCoupon.due_date);
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  emits: ['update-coupon'],
  mixins: [modalMixin],
};
</script>
