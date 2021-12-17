<template>
  <div>
    <header>
      <b-container>
        <b-row>
          <div class="site-logo">
            <a href="#">
              <img src="../../assets/images/Logo Consept.svg" />
            </a>
          </div>

          <div class="main-navbar">
            <ul class="navbar-menu">
              <li>
                <router-link
                  class="rainbow-text animated"
                  data-splitting
                  class-active="active"
                  to="/"
                  target="_blank"
                >
                  Home</router-link
                >
              </li>
              <li>
                <router-link
                  class="rainbow-text animated"
                  data-splitting
                  class-active="active"
                  to="/About"
                  target="_blank"
                >
                  About Us</router-link
                >
              </li>
              <li>
                <router-link
                  class="rainbow-text animated"
                  data-splitting
                  class-active="active"
                  to="/Services"
                  target="_blank"
                >
                  Services</router-link
                >
              </li>
              <li>
                <router-link
                  class="rainbow-text animated"
                  data-splitting
                  class-active="active"
                  to="/Projects"
                  target="_blank"
                  >Our Projects</router-link
                >
              </li>
              <li>
                <router-link
                  class="rainbow-text animated"
                  data-splitting
                  class-active="active"
                  to="/Clients"
                  target="_blank"
                  >Our Clients</router-link
                >
              </li>
              <router-link
                class="rainbow-text animated"
                data-splitting
                class-active="active"
                to="/Contact"
                target="_blank"
              >
                <li class="btn">
                  <a href="" class="rainbow-text animated" data-splitting target="_blank"
                    >Contact Us</a
                  >
                </li></router-link
              >
            </ul>
          </div>
          <div id="nav-icon2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Header",
  mounted() {
    $(document).ready(function () {
      $("#nav-icon2").click(function () {
        $(".main-navbar").toggleClass("open-menu");
        $(this).toggleClass("open");
        $(".main-navbar").toggle();
      });
    });
  },
};
</script>
