<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Color</th>
          <th scope="col">createdAt</th>
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
          <td>{{ item.name }}</td>
          <td> <span :class="'badge bg-' + item.color">{{item.color}}</span></td>
          <td>{{ item.createdAt }}</td>
          <td>
            <button @click="deleteNoteTag(item._id)" class="btn btn-danger">
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
import {deleteNodeTag, getNoteTags } from "../../../query/index";
export default {
  name: "ListTags",
  data() {
    return {
      data: [],
    };
  },

  async mounted() {
    let result = await Api.sendQuery(getNoteTags().query);
    this.data = result.data.noteTags;
  },

  methods: {
    deleteNoteTag: async function(id) {
      let gql = deleteNodeTag(id);
      try {
        await Api.sendQuery(gql.query, gql.variables);
        this.loadData()
      } catch (err) {
        console.log(err);
      }
    },
    loadData: async function() {
      let result = await Api.sendQuery(getNoteTags().query);
      this.data = result.data.noteTags;
    },
  },
};
</script>

<style lang="scss" scoped></style>
