<template>
    <div class="card">
      <div class="card-header"><strong>Add Patch Notes</strong></div>
      <div class="card-body">
        <div class="form-group">
          <label class="text-muted">Title</label
          ><input
            type="text"
            class="form-control"
            placeholder="Enter title"
            v-model="data.title"
          />
        </div>
        <div class="form-group mt-2">
          <label class="text-muted" >Patch Url</label
          ><input
            type="text"
            class="form-control"
            placeholder="Patch Url"
            v-model="data.patchName"
          disabled>
        </div>
        <div class="form-group mt-2">
          <label class="text-muted" >Author</label
          ><input
            type="text"
            class="form-control"
            placeholder="Author"
            v-model="data.author"
          />
        </div>
        <div class="form-group mt-2">
         <div id="summernote"></div>
         </div>
        <hr />
        <button  @click="savedata" class="btn btn-primary">Add</button>
      </div>
    </div>
</template>

<script>
import func from '../../../services/function'
import Api from '../../../services/api'
import query from '../../../query'

export default {
    name: 'AddPatchNote',
    data() {
        return {
            data: {patchName: null, createdAt: null, title: null, detail: "as", author: null}
        };
    },

    mounted() {
        this.data.patchName = func.generatePatchName()
    },

    methods: {
         savedata: async function() {
          this.data.patchName = func.generatePatchName()
          this.data.createdAt = func.getDate()
          if(this.data.title && this.data.detail && this.data.author) {
            console.log(this.data)
            try {
              let gql = query.addPatchNote(this.data.title, this.data.detail, this.data.patchName, this.data.author, this.data.createdAt)
              let result = await Api.sendQuery(gql.query, gql.variables)
              console.log(result)
            }catch(err) {
              console.log(err)
            }
          }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>