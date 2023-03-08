<template>
  <div
  class="modal fade"
  id="productModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-light">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>姓名</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <th>標題</th>
                    <td>數量</td>
                    <td>總金額</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  name: 'orderModal',
  data() {
    return {
      status: {},
      modal: {},
      isPaid: false,
    };
  },
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    order() {
      this.tempOrder = this.order;
      this.isPaid = this.tempOrder.is_paid;
    },
  },
  emits: ['update-product'],
  mixins: [modalMixin],
  inject: ['emitter'],
};
</script>
