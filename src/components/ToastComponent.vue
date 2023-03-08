<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header bg-dark">
      <span :class="`bg-${msg.style}`" class="p-8 rounded me-8 d-inline-block"></span>
      <strong class="me-auto text-white">{{ msg.title }}</strong>
      <button
      type="button"
      class="btn-close text-white"
      data-bs-dismiss="toast"
      aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
</div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  props: [
    'msg',
  ],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 4000,
    });
    toast.show();
  },
};
</script>
