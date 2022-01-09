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
          <a class="nav-link" href="#add" @click="changeShow('ListTags')"
            >List Tags</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#add" @click="changeShow('AddTags')"
            >Add Tags</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="#" @click="logout">Logout</a>
        </li>
      </ul>
      <AddPatchNote v-show="showComponent == 'AddPatchNote'" />
      <ListPatchNote v-show="showComponent == 'ListPatchNote'" />
      <ListTags v-show="showComponent == 'ListTags'" />
      <AddTags v-show="showComponent == 'AddTags'" />
    </div>
  </div>
</template>

<script>
import ListPatchNote from "./patch/ListPatchNote";
import AddPatchNote from "./patch/AddPatchNote";
import ListTags from "./tags/ListTags";
import AddTags from "./tags/AddTags";

export default {
  name: "Main",
  components: {
    ListPatchNote,
    AddPatchNote,
    ListTags,
    AddTags,
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
      this.showComponent = name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
