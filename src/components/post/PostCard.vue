<template>
  <div class="row">
    <div
      class="col-lg-6"
      v-for="(item, index) in data"
      v-bind:item="item._id"
      v-bind:index="index"
      v-bind:key="item._id"
    >
      <!-- Post content-->
      <article>
        <!-- Post header-->
        <header class="mb-4">
          <!-- Post title-->
          <h4 class="fw-bolder mb-1">{{ item.title }}</h4>
          <!-- Post meta content-->
          <div class="text-muted fst-italic mb-2">
            Posted on {{ item.createdAt }} by {{ item.author }}
          </div>
        </header>
        <!-- Preview image figure-->
        <figure class="mb-4 zoomout">
          <img
            class="img-fluid rounded blog-border"
            src="../../assets/img/7.png"
            alt="..."
          />
        </figure>
        <!-- Post content-->
        <section class="mb-5">
          <p class="mb-4">
            {{ item.detail }}<a :href="'/patch/' + item.patchName"> Read more</a>
          </p>
        </section>
      </article>
    </div>
    <div  class="alert alert-danger mt-2" v-show="this.data.length <= 0"><strong>A post containing the item searched was not found!</strong></div>
  </div>
</template>

<script>
import Api from "../../services/api";
import { getPatchNotes } from "../../query/index";

export default {
  name: "PostCard",

  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let result = await Api.sendQuery(getPatchNotes().query);
    this.data = result.data.patchNotes;
  },
  methods: {
    searchData: function(value){
       let newData = []
      for(let item of this.data) {
        if(item.title.toString().includes(value)|| item.detail.toString().includes(value)) {
          newData.push(item)
        }
      }
      this.data = newData;
    }
  },
};
</script>

<style lang="scss" scoped></style>
