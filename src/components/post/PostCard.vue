<template>
  <div class="col-lg-6">
    <!-- Post content-->
    <article>
      <!-- Post header-->
      <header class="mb-4">
        <!-- Post title-->
        <h4 class="fw-bolder mb-1">{{title}}</h4>
        <!-- Post meta content-->
        <div class="text-muted fst-italic mb-2">
          {{date}}
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
          {{detail}}<a href="#"> Read more</a>
        </p>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "PostCard",

  data() {
    return {
     
    };
  },
  props:[
        "title",
        "detail",
        "date"
  ],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
