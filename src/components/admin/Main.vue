<template>
  <div class="row">
    <div class="col-lg-12">
      <ul class="nav">
        <li class="nav-item">
          <a
            class="nav-link active"
            href="#list"
            @click="changeShow('ListPatchNote')"
            >List Patch Notes</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#add" @click="changeShow('AddPatchNote')"
            >Add Patch Notes</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="#" @click="logout">Logout</a>
        </li>
      </ul>
      <AddPatchNote v-show="showComponent == 'AddPatchNote'" />
      <ListPatchNote v-show="showComponent == 'ListPatchNote'" />
    </div>
  </div>
</template>

<script>
import ListPatchNote from "./patch/ListPatchNote";
import AddPatchNote from "./patch/AddPatchNote";

export default {
  name: "Main",
  components: {
    ListPatchNote,
    AddPatchNote,
  },
  data() {
    return {
      showComponent: "ListPatchNote",
    };
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
    changeShow: function (name) {
      console.log(name)
      this.showComponent = name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
