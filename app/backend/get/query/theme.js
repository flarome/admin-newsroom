const mutation = `



    id
    name
    role
    files(first: 250, filenames: ["templates/article*"]) {
      edges {
        node {
          filename
        }
      }
    }



  `;
export default mutation;