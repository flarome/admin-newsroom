const mutation = `


id
          title
     metafields(first: 250) {
      edges {
        node {
          id
          namespace
          key
          value
        }
      }
    }

      blog {

      id
      handle
      

      }
          


          handle
          body
          summary
          author {
          name
          }
          templateSuffix
          tags
          updatedAt
          publishedAt
          isPublished
          image {
            altText
            originalSrc
          }


  `;
export default mutation;