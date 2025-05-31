const mutation = `
    id
    role
    name
    files(first: 250, filenames: ["templates/article*"]) {
      edges {
        node {
          filename
        }
      }
    }



  `;
export default mutation;