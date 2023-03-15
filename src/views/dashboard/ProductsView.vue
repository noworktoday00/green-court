<template>
  <Loading :active="isLoading" />
  <div class="gradient-bg">
    <div class="text-end">
      <button
      class="btn btn-outline-light"
      type="button"
      @click="openModal(true)">增加一個產品</button>
    </div>
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ (product.category) }}</td>
          <td>{{ product.title }}</td>
          <td class="text-right">
            {{ $filters.currency(product.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(product.price) }}
          </td>
          <td>
            <span v-if="product.is_enabled" class="text-light">啟用</span>
            <span v-else class="text-warning">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
              class="btn btn-outline-light btn-sm"
              @click="openModal(false,product)">編輯</button>
              <button
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModal(product)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row align-item-center">
      <PaginationComponent :pages="pagination" @emit-page="getProducts"/>
    </div>
  </div>
  <!-- 這邊綁一個 ref -->
  <ProductModal ref="productModal" :product="tempProduct"
  @update-product="updateProduct" />
  <DeleteModal ref="deleteModal" :product="tempProduct"
  @delete-item="deleteProduct"/>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DeleteModal,
    PaginationComponent,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          // console.log(res);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        });
    },
    openModal(isNew, product) {
      // 新增
      if (isNew) {
        // 新的就清空 temp
        this.tempProduct = {};
      }
      // 編輯
      if (!isNew) {
        // 編輯就傳入 product 這邊記得展開做一個拷貝
        this.tempProduct = { ...product };
      }
      this.isNew = isNew;
      // 用 $refs 把 productModal 綁進來
      const { productComponent } = this.$refs.productModal;
      // 執行內層函式
      productComponent.showModal();
    },
    openDeleteModal(product) {
      console.log(product);
      this.tempProduct = { ...product };
      const deleteProductComponent = this.$refs.deleteModal;
      deleteProductComponent.showModal();
    },
    updateProduct(product) {
      this.tempProduct = product;
      const productComponent = this.$refs.productModal;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let apiMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
        apiMethod = 'put';
      }
      this.$http[apiMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res);
          productComponent.hideModal();
          if (res.data.success) {
            this.getProducts();
            this.$httpMessageState(res, '新增商品');
          }
        });
    },
    deleteProduct() {
      const deleteComponent = this.$refs.deleteModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api)
        .then((res) => {
          console.log(res);
          deleteComponent.hideModal();
          if (res.data.success) {
            this.getProducts();
            this.$httpMessageState(res, '刪除商品');
          }
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
