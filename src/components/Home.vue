<template>
  <div>
    <!-- Responsive navbar-->
    <Nav />
    <!-- Page content-->
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <PostCard :title="'Welcome to Blog Post!'" :date="'Posted on January 1, 2021 by Start Bootstrap'" :detail="'Science is an enterprise that should be cherished as an activity of the free human mind... '"/>
          </div>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <!-- Search widget-->
          <Search/>
          <!-- Categories widget-->
          <Categories/>
          <!-- Side widget-->
          <Widget/>
        </div>
      </div>
    </div>
    <!-- Footer-->
    <Footer/>
  </div>
</template>

<script>
import Nav from "./inc/Nav";
import PostCard from "./post/PostCard";
import Categories from "./side/Categories";
import Widget from "./side/Widget";
import Footer from "./inc/Footer"
import Search from "./side/Search";

export default {
  name: "Home",
  components: {
    Nav,
    PostCard,
    Categories,
    Widget,
    Footer,
    Search
  },

  data() {
    return {
       data: {title: "wewewe", date: "wewew", detail: "wewe"}
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
