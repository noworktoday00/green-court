<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <ToastComponent v-for="(msg, key) in messages" :key="key"
      :msg="msg" />
  </div>
</template>

<script>
import ToastComponent from '@/components/ToastComponent.vue';

export default {
  data() {
    return {
      messages: [],
    };
  },
  components: {
    ToastComponent,
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
