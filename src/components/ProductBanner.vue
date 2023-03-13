<template>
    <div class="container-fluid px-0">
    <div class="page-banner"></div>
  </div>
</template>

<style lang="scss">
.page-banner {
  background-image: url('@/assets/group_add_FILL0_wght400_GRAD0_opsz48.jpeg');
  background-size: cover ;
  background-position: center 73%;
  height: 240px;
  @media (max-width:577px) {
    height: 160px;
    background-position: center bottom;
  }
}
</style>
