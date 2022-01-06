<template>
  <div class="card mb-4">
    <div class="card-header">Categories</div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-12">
          <ul class="list-unstyled mb-0">
            <li
              v-for="(item, index) in data"
              v-bind:item="item._id"
              v-bind:index="index"
              v-bind:key="item._id"
            >
            <a :href="'/' + item.patchName">{{item.createdAt}} - Patch Notes</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",

  data() {
    return {};
  },
  props:["data"],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
