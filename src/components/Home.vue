<template>
  <div>
    <!-- Responsive navbar-->
    <Nav />
    <!-- Page content-->
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <PostCard
              v-for="(item, index) in data"
              v-bind:item="item._id"
              v-bind:index="index"
              v-bind:key="item._id"
              :title="item.title"
              :date="item._id"
              :detail="item.detail"
              :author="item.author"
            />
          </div>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <!-- Search widget-->
          <Search />
          <!-- Categories widget-->
          <Categories />
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
import PostCard from "./post/PostCard";
import Categories from "./side/Categories";
import Widget from "./side/Widget";
import Footer from "./inc/Footer";
import Search from "./side/Search";
import Api from "../services/api";
import { getPatchNote } from "../query/index";

export default {
  name: "Home",
  components: {
    Nav,
    PostCard,
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
  async mounted() {
    let result = await Api.sendQuery(getPatchNote("61d703e52443699f5eef8c05").query);
    console.log(result)
    this.data = result.data.patchNotes;
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
