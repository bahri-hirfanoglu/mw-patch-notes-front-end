const getPatchNotes = () => {
  var data = {
    query: `{
      patchNotes {
          _id  
        title
        detail
        author
        patchName
        createdAt
        tag {
          _id
          name
          color
        }
      }
    }
    `,
  };
  return data;
};

const getPatchNote = (id) => {
  var data = {
    query: `{
      patchNote(id:"${id}") {
        _id  
        title
        detail
        author
        patchName
        createdAt
        tag {
          _id
          name
          color
        }
      }
    }
    `,
  };
  return data;
};

const addPatchNote = (title, detail, patchName, author, createdAt, tagId) => {
  var data = {
    query: `
    mutation addPathcNote($title:String!, $detail:String!, $patchName:String!, $author:String!, $createdAt:String!, $tagId:ID) {
      addPathcNote(title:$title, detail:$detail, patchName:$patchName, author:$author, createdAt:$createdAt tagId:$tagId){
        _id  
        title
        detail
        author
        patchName,
        createdAt
      }
    }`,
    variables: {
      title,
      detail,
      patchName,
      author,
      createdAt,
      tagId,
    },
  };
  return data;
};

const updatePatchNote = (id, title, detail, patchName, author, tagId) => {
  var data = {
    query: `
    mutation updatePatchNote($id:ID!,$title:String, $detail:String, $patchName:String, $author:String, $tagId:ID) {
      updatePatchNote(id:$id, title:$title, detail:$detail, patchName:$patchName, author:$author, tagId:$tagId){
        _id  
        title
        detail
        author
        patchName,
        createdAt
      }
    }`,
    variables: {
      id,
      title,
      detail,
      patchName,
      author,
      tagId,
    },
  };
  return data;
};

const deletePatchNote = (id) => {
  var data = {
    query: `
    mutation deletePatchNote($id:ID!) {
      deletePatchNote(id:$id){
        _id 
      }
    }`,
    variables: {
      id,
    },
  };
  return data;
};

const getNoteTags = () => {
  var data = {
    query: `{
      noteTags {
        _id
        name  
        color
      }
    }
    `,
  };
  return data;
};

const getNoteTag = (id) => {
  var data = {
    query: `{
      noteTags(id:${id}) {
        _id
        name  
        color
      }
    }
    `,
  };
  return data;
};

const addNoteTag = (name, color, createdAt) => {
  var data = {
    query: `{
      mutation addNoteTag($name:String!, $color:String!, $createdAt:String!) {
        addNoteTag(name:$name, color:$color, createdAt:$createdAt){
          _id
          name
          color
          createdAt 
        }
      }
    `,
    variables: {
      name,
      color,
      createdAt,
    },
  };
  return data;
};

const updateNoteTag = (id, name, color) => {
  var data = {
    query: `{
      mutation updateNoteTag($id:ID!, $name:String, $color:String) {
        updateNoteTag(id:$id, name:$name, color:$color){
          _id
          name
          color
        }
      }
    `,
    variables: {
      id,
      name,
      color,
    },
  };
  return data;
};

const deleteNodeTag = (id) => {
  var data = {
    query: `{
      mutation deleteNoteTag($id:ID!) {
        deleteNoteTag(id:$id){
          _id
          name
          color
        }
      }
    `,
    variables: {
      id,
    },
  };
  return data;
};

module.exports = {
  getPatchNotes,
  getPatchNote,
  addPatchNote,
  deletePatchNote,
  updatePatchNote,
  getNoteTags,
  getNoteTag,
  addNoteTag,
  deleteNodeTag,
  updateNoteTag,
};
