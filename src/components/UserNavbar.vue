<template>
  <div class="container fixed-top" data-aos="fade-down" data-aos-duration="2000">
    <nav class="navbar
                navbar-expand-lg
                rounded-3
                mt-24">
    <div class="container d-flex justify-content-between">
        <router-link class="navbar-brand" to="/landing">
          <h1 class="head-logo ms-16 ms-md-48 mb-0">Green-court</h1>
        </router-link>
      <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
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
            <ul class="dropdown-menu border-white mt-md-16" aria-labelledby="navbarDropdown">
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
          <li class="nav-item">
            <router-link class="nav-link text-white link" to="/cart">
              購物車
            </router-link>
            <!-- <a
            class="nav-link"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample">
              查看購物車
            </a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
<!-- <div
class="offcanvas offcanvas-start"
tabindex="-1" id="offcanvasExample"
aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button"
    class="btn-close text-reset"
    data-bs-dismiss="offcanvas"
    aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen.
       Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button
      class="btn btn-secondary dropdown-toggle"
      type="button" id="dropdownMenuButton"
      data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div> -->
</template>

<style lang="scss">
.navbar {
  background: rgba(255, 255, 255, 0.4);
  &:hover{
    background: rgba(0, 0, 0, 0.4);
  }
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
