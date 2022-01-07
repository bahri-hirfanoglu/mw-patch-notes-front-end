<template>
  <div class="row">
    <div class="card">
      <div class="card-header"><strong>Login to admin account</strong></div>
      <div class="card-body">
        <div class="form-group">
          <label class="text-muted">UserName</label
          ><input
            type="text"
            v-model="user.username"
            class="form-control"
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label class="text-muted">Password</label
          ><input
            type="password"
            v-model="user.password"
            class="form-control"
            placeholder="Enter password"
          />
        </div>
        <hr />
        <button v-on:click="login" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../../services/api";
export default {
  name: "Login",

  data() {
    return {
      user: { username: null, password: null },
    };
  },

  mounted() {},
  beforeCreate: function () {
    if (this.$session.exists()) {
      this.$router.push("/admin");
    }
  },
  methods: {
    async login() {
      try {
        if (this.user.username && this.user.password) {
          let result = await Api.loginAdmin(this.user);
          if (result.status === 200 && "token" in result.data) {
            this.$session.start();
            this.$session.set("jwt", result.data.token);
            this.$router.push("/admin");
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
