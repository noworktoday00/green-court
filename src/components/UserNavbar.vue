<template>
  <div class="container fixed-top" data-aos="fade-down" data-aos-duration="2000">
    <nav class="navbar
                navbar-expand-lg
                rounded-3
                mt-24">
    <div class="container d-flex justify-content-between">
        <router-link class="navbar-brand" to="/">
          <h1 class="head-logo ms-16 ms-md-48 mb-0">Green-court</h1>
        </router-link>
      <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <div class="nav-link text-white border border-white rounded px-16 py-8">
              Lv.{{ level }}
            </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-8 mb-lg-0 ms-auto me-32">
          <li class="nav-item">
            <router-link class="nav-link text-white link" to="/about">
              關於綠場
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white link" to="/level">
              <i class="bi bi-clipboard me-4"></i>看等級
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-white dropdown-toggle link"
              href="#" id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              看活動
            </a>
            <ul class="dropdown-menu mt-md-16" aria-labelledby="navbarDropdown">
              <li class="dropdown-item">
                <router-link class="nav-item text-light link" to="/activities">
                  <i class="bi bi-people-fill me-4"></i>找球團
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="nav-item text-light link" to="/coach">
                  <i class="bi bi-person-bounding-box me-4"></i>找教練
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white link" to="/racket">
              <i class="bi bi-cart3 me-4"></i>找球具
            </router-link>
          </li>
          <li class="nav-item me-16">
            <!-- <router-link class="nav-link text-white link" to="/cart">
              <i class="bi bi-calendar2-week"></i>
            </router-link> -->
            <a
            class="nav-link"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample">
            <i class="bi bi-calendar2-week text-white position-relative">
            </i>
            </a>
          </li>
          <li class="nav-item">
            <div v-if="!level"
              class="nav-link text-white border border-white rounded px-16 d-none d-md-block">
              <router-link to="/level" class="text-white text-decoration-none">前往測驗</router-link>
            </div>
            <div v-else
              class="nav-link text-white border border-white rounded px-16 d-none d-md-block">
              Lv.{{ level }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  <NavbarCanvas ref="offCanvas"/>
</template>

<style lang="scss">
.navbar {
  background: rgba(0, 0, 0, 0.7);
}
.navbar-toggler-icon {
  background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.7%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');
}
.head-logo {
  background-image: url('@/assets/green-court-logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 40px;
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
.dropdown-menu {
  background: rgba(0, 0, 0, 0.4);
  .dropdown-item {
    &:hover {
      background: rgba(255, 0, 0, 0.25);
    }
  }
}
</style>

<script>
import NavbarCanvas from '@/components/NavbarCanvas.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    NavbarCanvas,
  },
  data() {
    return {
      level: 0,
    };
  },
  methods: {
    getLevel() {
      this.level = localStorage.level;
    },
    showCanvas() {
      // 用 $refs 把 offConvas 綁進來
      const { offCanvas } = this.$refs.offCanvas;
      // 執行內層函式
      offCanvas.showCanvas();
    },
  },
  mounted() {
    this.getLevel();
    emitter.on('get-level', () => {
      this.getLevel();
    });
  },
};
</script>
