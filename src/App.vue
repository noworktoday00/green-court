<template>
  <router-view/>
  <UserFooter />
</template>

<style lang="scss">
@import "./assets/all.scss";

.gradient-bg {
  background-image: url('@/assets/bannerBG.png');
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
}
.card {
  background: rgba(255, 255, 255, 0.293);
}
</style>

<script>
import UserFooter from '@/components/UserFooter.vue';

export default {
  components: {
    UserFooter,
  },
};
</script>
