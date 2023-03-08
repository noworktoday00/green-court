<template>
  <!-- 這邊綁一個 ref  讓 js 方法可以綁到這個 modal 上-->
  <div
  class="modal modal-xl fade"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
        <div class="col-sm-4">
          <div class="mb-3">
            <label for="image" class="form-label">輸入圖片網址</label>
            <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
            <img :src="tempProduct.imageUrl" class="img-fluid mt-8" alt="">
          </div>
          <div class="mb-3">
            <label for="customFile" class="form-label" htmlFor="">或 上傳圖片
              <i class="fas fa-spinner fa-spin"></i>
            </label>
            <input
            type="file"
            id="customFile"
            class="form-control"
            ref="fileInput"
            @change="uploadFile">
          </div>
          <!-- 延伸技巧，多圖 -->
          <!-- <div class="mt-16" v-if="Array.isArray(tempProduct.imagesUrl)">
            <div class="mb-8 input-group"
                  v-for="(img, key) in tempProduct.imagesUrl"
                  :key="key + '135'">
              <input type="url" class="form-control form-control"
                      placeholder="請輸入連結" v-model="tempProduct.imagesUrl[key]">
              <button type="button" class="btn btn-outline-danger">
                移除
              </button>
              <img :src="tempProduct.imagesUrl[key]" class="img-fluid" alt="">
            </div>
            <div>
              <button class="btn btn-outline-primary btn-sm d-block w-100"
                      v-if="!tempProduct.imagesUrl.length"
                      @click="tempProduct.imagesUrl.push('')">
                新增圖片
              </button>
            </div>
          </div> -->
          <div class="mt-8" v-if="tempProduct.images">
            <div v-for="(image, key) in tempProduct.images" class="mb-3 input-group" :key="key">
              <input
                type="url"
                class="form-control form-control"
                v-model="tempProduct.images[key]"
                placeholder="請輸入連結"/>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="tempProduct.images.splice(key, 1)">移除</button>
            </div>
            <div v-if="
              tempProduct.images[tempProduct.images.length - 1] || !tempProduct.images.length">
              <button
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="tempProduct.images.push('')">新增圖片</button>
            </div>
        </div>
        </div>
        <div class="col-sm-8">
          <!-- 標題 & 分類 -->
          <div class="row gx-2">
            <div class="mb-16 col-md-6">
              <label for="title" class="form-label">標題</label>
              <input type="text" class="form-control" id="title"
                      placeholder="請輸入標題" v-model="tempProduct.title">
            </div>
            <div class="mb-16 col-md-6">
              <label for="category" class="form-label">分類</label>
                <select
                class="form-select"
                id="category"
                aria-label="Default select example"
                v-model="tempProduct.category">
                  <option value="臨打團">臨打團</option>
                  <option value="教練課">教練課</option>
                  <option value="羽球拍">羽球拍</option>
                </select>
            </div>
          </div>
          <hr>
          <!-- 日期 & 時間 -->
          <div class="row gx-2">
            <div class="mb-16 col-md-6">
              <label for="date" class="form-label">日期</label>
              <input
              type="date" class="form-control" id="date"
              placeholder="請輸入日期" v-model="tempProduct.date">
            </div>
            <div class="mb-16 col-md-6">
              <label class="form-label" for="time">時間</label>
              <input
              type="time" class="form-control" id="time"
              placeholder="請輸入時間" v-model="tempProduct.time">
            </div>
          </div>
          <hr>
          <!-- 地點 & 地圖 -->
          <div class="row gx-2">
            <div class="mb-16 col-md-6">
              <label class="form-label" for="location">地點</label>
              <input
              type="text" class="form-control" id="location"
              placeholder="請輸入地點" v-model="tempProduct.location">
            </div>
            <div class="mb-16 col-md-6">
              <label class="form-label" for="map">地圖</label>
              <input
              type="text" class="form-control" id="map"
              placeholder="請輸入 src" v-model="tempProduct.iframe">
            </div>
          </div>
          <hr>
          <!-- 單位 & 時數 -->
          <div class="row gx-2">
            <div class="mb-16 col-md-6">
              <label class="form-label" for="unit">單位</label>
              <input
              type="text" class="form-control" id="unit"
              placeholder="請輸入單位" v-model="tempProduct.unit">
            </div>
            <div class="mb-16 col-md-6">
              <label class="form-label" for="hours">時數</label>
              <input
              type="number" class="form-control" id="hours" min="1"
              placeholder="請輸入時數" v-model="tempProduct.hours">
            </div>
          </div>
          <hr>
          <!-- 場地數 & 名額 -->
          <div class="row gx-2">
            <div class="mb-16 col-md-6">
              <label class="form-label" for="court">場地數</label>
              <input
              type="number" class="form-control" id="court" min="1"
              placeholder="請輸入場地數" v-model="tempProduct.court">
            </div>
            <div class="mb-16 col-md-6">
              <label class="form-label" for="members">名額</label>
              <input
              type="number" class="form-control" id="members" min="1"
              placeholder="請輸入名額" v-model="tempProduct.members">
            </div>
          </div>
          <hr>
          <!-- 年資 & 等級 -->
          <div class="row gx-2">
            <div class="mb-16 col-md-6">
              <label class="form-label" for="experience">年資</label>
              <input
              type="number" class="form-control" id="experience"
              placeholder="請輸入年資" v-model="tempProduct.experience">
            </div>
            <div class="mb-16 col-md-6">
              <label for="level" class="form-label">等級</label>
                      <select
                      class="form-select"
                      id="level"
                      aria-label="Default select example"
                      v-model.number="tempProduct.level">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                      </select>
            </div>
          </div>
          <hr>
          <!-- 原價 & 售價 -->
          <div class="row gx-2">
            <div class="mb-16 col-md-6">
              <label for="origin_price" class="form-label">原價</label>
              <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價" v-model.number="tempProduct.origin_price">
            </div>
            <div class="mb-16 col-md-6">
              <label for="price" class="form-label">售價</label>
              <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model.number="tempProduct.price">
            </div>
          </div>
          <hr>
          <div class="mb-16">
            <label for="description" class="form-label">產品描述</label>
            <textarea type="text" class="form-control" id="description"
                      placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
          </div>
          <div class="mb-16">
            <label for="content" class="form-label">說明內容</label>
            <textarea type="text" class="form-control" id="content"
                      placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
          </div>
          <div class="mb-16">
            <div class="form-check">
            <input class="form-check-input" type="checkbox"
            :true-value="1"
            :false-value="0"
            id="is_enabled" v-model="tempProduct.is_enabled">
            <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div class="modal-footer">
          <button
          type="button"
          class="btn btn-secondary" data-bs-dismiss="modal">
          Close</button>
          <button
          type="button"
          class="btn btn-primary"
          @click="$emit('update-product',tempProduct)">確定新增</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      modal: {},
      tempProduct: {
        imagesUrl: [],
      },
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  methods: {
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl;
          }
        });
    },
  },
  mixins: [ModalMixin],
};
</script>
