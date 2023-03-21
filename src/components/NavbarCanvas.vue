<template>
  <Loading :active="isLoading" />
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
                <th>日期</th>
                <th>球團名稱</th>
                <th style="width: 120px">數量</th>
                <th>取消</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="activitiesCart.length > 1">
                <tr v-for="item in activitiesCart" :key="item.id">
                  <td>
                    {{ item.product.date }}
                  </td>
                  <td>
                    {{ item.product.title }}
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
                    <button
                    class="btn btn-outline-light"
                    @click="removeCartItem(item.id)">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </template>
              <template v-else>
                  您尚未參加活動
              </template>
            </tbody>
            <tfoot>
            </tfoot>
          </table>
      </div>
      <div>
        <table class="table align-middle text-white my-48">
            <thead>
              <tr>
                <th>品牌</th>
                <th>產品名稱</th>
                <th style="width: 120px">數量</th>
                <th>取消</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="racketCart.length > 1">
                <tr v-for="item in racketCart" :key="item.id">
                  <td>
                    {{ item.product.description }}
                  </td>
                  <td>
                    {{ item.product.title }}
                  </td>
                  <td>
                    {{ item.qty }}
                  </td>
                  <td>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                  <td>
                    <button
                    class="btn btn-outline-light"
                    @click="removeCartItem(item.id)">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </template>
              <template v-else>您尚未選購球拍</template>
            </tbody>
            <tfoot>
            </tfoot>
          </table>
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
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      offcanvas: {},
      carts: {},
      activitiesCart: [],
      racketCart: [],
      final_total: '',
      total: '',
      status: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.carts.forEach((item) => {
            if (item.product.category === '臨打團') {
              this.activitiesCart.push(item);
              console.log(this.activitiesCart);
            }
            if (item.product.category === '教練課') {
              this.activitiesCart.push(item);
              console.log(this.activitiesCart);
            }
            if (item.product.category === '羽球拍') {
              this.racketCart.push(item);
              // console.log(this.racketCart);
            }
          });
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
          this.isLoading = false;
        });
    },
    removeCartItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url)
        .then((res) => {
          // console.log(res);
          this.$httpMessageState(res, '刪除品項');
          this.activitiesCart = [];
          this.racketCart = [];
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
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>
