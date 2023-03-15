<template>
  <Loading :active="isLoading" />
  <div class="gradient-bg">
    <div class="container">
      <div class="row row-cols-md-2">
        <div class="col col-12">
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
          <div class="pb-48">
            <label for="coupon-input" class="d-none">請輸入優惠碼</label>
            <div class="input-group input-group-sm text-white">
              <input
              type="text"
              id="coupon-input"
              class="form-control rounded"
              v-model="coupon_code"
              placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button
                class="btn btn-outline-light ms-8"
                type="button"
                @click="addCoupon()">
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-12">
          <Form @submit="createOrder" class="my-48 text-white" v-slot="{ errors }">
            <div class="mb-16">
              <label for="name" class="form-label">訂購人姓名</label>
                <Field type="text" id="name" name="姓名" class="form-control"
                       placeholder="請輸入您的姓名" v-model="form.user.name"
                       :class="{ 'is-invalid': errors['姓名'] }"
                       rules="required" />
                <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
            <div class="mb-16">
              <label for="email" class="form-label">電子信箱</label>
                <Field type="email" id="email" name="email" class="form-control"
                       placeholder="請輸入您的 e-mail" v-model="form.user.email"
                       :class="{ 'is-invalid': errors['email']}"
                       rules="email|required" />
                <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="mb-16">
              <label for="tel" class="form-label">聯絡電話</label>
                <Field type="tel" id="tel" name="電話" class="form-control"
                       placeholder="請輸入您的聯絡電話" v-model="form.user.tel"
                       :class="{'is-invalid': errors['電話']}"
                       rules="required" />
                <ErrorMessage name="電話" class="invalid-feedback"/>
            </div>
            <div class="mb-16">
              <label for="address" class="form-label">聯絡地址</label>
                <Field type="text" id="address" name="地址" class="form-control"
                       placeholder="請輸入您的聯絡地址" v-model="form.user.address"
                       :class="{'is-invalid':errors['地址']}"
                       rules="required" />
                <ErrorMessage name="地址" class="invalid-feedback" />
            </div>
            <div class="mb-24">
              <label for="message" class="form-label">留言</label>
                <textarea class="form-control"
                          id="message"
                          cols="30"
                          rows="7"
                          v-model="form.message">
                </textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-outline-light">送出訂單</button>
            </div>
          </Form>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: {},
      final_total: '',
      total: '',
      coupon_code: '',
      isLoading: false,
      status: {
        loadingItem: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
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
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
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
    addCoupon() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon })
        .then((res) => {
          this.getCart();
          this.isLoading = false;
          this.$httpMessageState(res, '使用優惠券');
        });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const orderForm = this.form;
      this.isLoading = true;
      this.$http.post(url, { data: orderForm })
        .then((res) => {
          console.log(res);
          this.getCart();
          this.isLoading = false;
          this.$httpMessageState(res, '建立訂單');
          this.$router.push(`/order/${res.data.orderId}`);
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
