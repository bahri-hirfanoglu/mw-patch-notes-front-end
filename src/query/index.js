const getPatchNotes = () => {
  return `{
        patchNotes {
            _id  
          title
          detail
          author
          patchName,
          createdAt
        }
      }
      `;
};

module.exports = {
  getPatchNotes,
};
