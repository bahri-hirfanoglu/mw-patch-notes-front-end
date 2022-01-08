<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">patchName</th>
          <th scope="col">createdAt</th>
          <th scope="col">Setting</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data"
          v-bind:item="item._id"
          v-bind:index="index"
          v-bind:key="item._id"
        >
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.patchName }}</td>
          <td>{{ item.createdAt }}</td>
          <td>
            <button @click="deletePatch(item._id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Api from "../../../services/api";
import { getPatchNotes, deletePatchNote } from "../../../query/index";
export default {
  name: "ListPatchNotes",

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
    deletePatch: async function(id) {
      let gql = deletePatchNote(id);
      try {
        await Api.sendQuery(gql.query, gql.variables);
        this.loadData()
      } catch (err) {
        console.log(err);
      }
    },
    loadData: async function() {
      let result = await Api.sendQuery(getPatchNotes().query);
      this.data = result.data.patchNotes;
    },
  },
};
</script>

<style lang="scss" scoped></style>
