import Modal from 'bootstrap/js/dist/modal';

export default {
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    // 這邊使用 BS modal 的 js 跟 data 裡面的 modal 接上
    this.modal = new Modal(this.$refs.modal);
  },
};
