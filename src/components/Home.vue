<template>
  <div>
    <!-- Responsive navbar-->
    <Nav />
    <!-- Page content-->
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
            <router-view />
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <!-- Search widget-->
          <Search />
          <!-- Categories widget-->
          <Categories :data="data" />
          <!-- Side widget-->
          <Widget />
        </div>
      </div>
    </div>
    <!-- Footer-->
    <Footer />
  </div>
</template>

<script>
import Nav from "./inc/Nav";
import Categories from "./side/Categories";
import Widget from "./side/Widget";
import Footer from "./inc/Footer";
import Search from "./side/Search";

export default {
  name: "Home",
  components: {
    Nav,
    Categories,
    Widget,
    Footer,
    Search,
  },

  data() {
    return {
      data: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
