<template>
  <div class="card">
    <div class="card-header"><strong>Add Note Tags</strong></div>
    <div class="card-body">
      <div class="form-group">
        <label class="text-muted">Name</label
        ><input
          type="text"
          class="form-control"
          placeholder="Enter tag name"
          v-model="data.name"
        />
      </div>
      <div class="form-group mt-2">
        <select class="form-select" v-model="data.color">
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <hr />
      <button @click="savedata" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import func from "../../../services/function";
import Api from "../../../services/api";
import query from "../../../query";

export default {
  name: "AddTags",
  data() {
    return {
      data: { name: null, createdAt: null, color: null },
    };
  },

  mounted() {},

  methods: {
    savedata: async function () {
      this.data.createdAt = func.getDate();
      if (this.data.name && this.data.color) {
        try {
          let gql = query.addNoteTag(
            this.data.name,
            this.data.color,
            this.data.createdAt
          );
          await Api.sendQuery(gql.query, gql.variables);
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
