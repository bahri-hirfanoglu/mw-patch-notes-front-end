<template>
  <div class="row">
   
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {};
  },

  mounted() {},

  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push("/login");
    }
  },
  methods: {
    logout: function () {
      this.$session.destroy();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped></style>
