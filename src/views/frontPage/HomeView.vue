<template>
  <UserNavbar />
  <router-view />
  <ToastMessages />
</template>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    UserNavbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
