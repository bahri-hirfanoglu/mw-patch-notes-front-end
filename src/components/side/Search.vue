<template>
  <div class="card mb-4">
    <div class="card-header">Search</div>
    <div class="card-body">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          placeholder="Enter search term..."
          aria-label="Enter search term..."
          aria-describedby="button-search"
          v-model="searchText"
        />
        <button class="btn btn-primary" id="button-search" @click="goSearch">
          Go!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      searchText: ""
    };
  },

  mounted() {},

  methods: {
    goSearch: function() {
      this.$emit('inputSearch', this.searchText);
    }
  },
};
</script>

<style lang="scss" scoped></style>
