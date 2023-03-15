<template>
    <div class="offcanvas offcanvas-end bg-dark text-white"
       tabindex="-1" id="offcanvasExample"
       aria-labelledby="offcanvasExampleLabel"
       data-bs-backdrop="false"
       ref="offcanvas">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">查看清單</h5>
      <a type="button" href="#"
         class="text-reset"
         data-bs-dismiss="offcanvas"
         aria-label="Close">
        <i class="bi bi-x fs-3 text-white"></i>
      </a>
    </div>
    <div class="offcanvas-body">
      <div>
        <table class="table align-middle text-white my-48">
            <thead>
              <tr>
                <th>品名</th>
                <th style="width: 120px">數量</th>
                <th>單價</th>
                <th>總計</th>
                <th>刪除產品</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="carts">
                <tr v-for="item in carts.carts" :key="item.id">
                  <td> {{ item.product.title }}
                    <h6 class="text-success" v-if="item.coupon">已套用優惠券</h6>
                  </td>
                  <td>
                    <label for="item-qty" class="d-none">數量</label>
                    <div class="input-group input-group-sm">
                      <input
                      type="number"
                      id="item-qty"
                      class="form-control"
                      min="1"
                      v-model.number="item.qty"
                      :disabled="status.loadingItem === item.id"
                      @change="changeQty(item)">
                      <div class="input-group-text">/ {{ item.product.unit }}</div>
                        </div>
                  </td>
                  <td>
                    {{ $filters.currency(item.product.price) }}
                  </td>
                  <td>
                    <small v-if="final_total !== total" class="text-success">折扣價</small>
                    <br>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                  <td>
                    <button
                    class="btn btn-outline-white p-8"
                    @click="removeCartItem(item.id)">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(carts.total) }}</td>
              </tr>
              <tr>
                <td colspan="4" class="text-end">折扣價</td>
                <td class="text-end"> {{ $filters.currency(carts.final_total) }} </td>
              </tr>
            </tfoot>
          </table>
      </div>
      <div>
        球拍 table
      </div>
      <div class="d-grid">
        <router-link to="/cart" class="btn btn-outline-light"
        @click="hideCanvas()">
          前往結帳
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  data() {
    return {
      offcanvas: {},
      carts: {},
      final_total: '',
      total: '',
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.carts = res.data.data;
          console.log(this.carts);
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
        });
    },
    changeQty(item) {
      // console.log(item);
      this.status.loadingItem = item.id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cartInfo = {
        product_id: item.product_id,
        qty: item.qty,
      };
      // console.log(cartInfo);
      this.$http.put(url, { data: cartInfo })
        .then((res) => {
          this.status.loadingItem = '';
          this.$httpMessageState(res, '更新數量');
          this.getCart();
        });
    },
    removeCartItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url)
        .then((res) => {
          // console.log(res);
          this.$httpMessageState(res, '刪除品項');
          this.getCart();
        });
    },
    showCanvas() {
      this.offcanvas.show();
    },
    hideCanvas() {
      this.offcanvas.hide();
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
  },
};
</script>
