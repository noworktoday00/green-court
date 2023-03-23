<template>
  <Loading :active="isLoading" />
  <table class="table mt-16 text-white">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買品項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item, in orders" :key="item.id">
        <tr>
          <td>{{ $filters.date(item.create_at)}}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, index) in item.products" :key="index">
              {{ product.product.title }} {{ product.qty }} {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total }}</td>
          <td>
            <span v-if="!item.is_paid" class="text-light">已付款</span>
            <span v-else class="text-warning">未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-light btn-sm"
                      @click="openOrderModal(item)">
                檢視
              </button>
              <button class="btn btn-outline-danger btn-sm"
                      @click="openDeleteModal(item.id)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <PaginationComponent :pages="pagination" @emit-page="getOrders" />
  <OrderModal :order="tempOrder" ref="orderModal" />
  <DeleteModal :order="tempOrder" ref="deleteModal" @delete-item="deleteOrder" />
</template>

<script>
import OrderModal from '@/components/OrderModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      orders: {},
      tempOrder: {},
      pagination: {},
      currentPage: 1,
      isLoading: false,
    };
  },
  components: {
    OrderModal,
    DeleteModal,
    PaginationComponent,
  },
  methods: {
    getOrders(page = 1) {
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(url, this.tempProduct)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        });
    },
    openOrderModal(item) {
      this.tempOrder = { ...item };
      console.log(this.tempOrder);
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    openDeleteModal(order) {
      this.tempOrder = { ...order };
      const deleteOrderComponent = this.$refs.deleteModal;
      deleteOrderComponent.showModal();
    },
    deleteOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http.delete(url)
        .then((res) => {
          console.log(res);
          const deleteComponent = this.$refs.deleteModal;
          deleteComponent.hideModal();
          this.getOrders();
          this.$httpMessageState(res, '刪除訂單');
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
